-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable Row Level Security
ALTER DATABASE postgres SET row_security = on;

-- Create plans table
CREATE TABLE plans (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  stripe_price_id TEXT UNIQUE NOT NULL,
  essay_quota INTEGER NOT NULL DEFAULT 0,
  detector_quota INTEGER NOT NULL DEFAULT 0,
  humanizer_chars INTEGER NOT NULL DEFAULT 0,
  interval TEXT NOT NULL CHECK (interval IN ('monthly', 'yearly')),
  price DECIMAL(10,2) NOT NULL,
  features JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create users table (extends Supabase auth.users)
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  plan_id UUID REFERENCES plans(id) ON DELETE SET NULL,
  stripe_customer_id TEXT UNIQUE,
  subscription_status TEXT CHECK (subscription_status IN ('active', 'inactive', 'cancelled', 'past_due')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create essays table
CREATE TABLE essays (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  original_content TEXT,
  topic TEXT NOT NULL,
  length INTEGER NOT NULL,
  essay_type TEXT NOT NULL,
  writing_style TEXT NOT NULL,
  citation_style TEXT NOT NULL,
  ai_detection_score DECIMAL(5,4),
  humanized_score DECIMAL(5,4),
  is_humanized BOOLEAN DEFAULT false,
  character_count INTEGER NOT NULL DEFAULT 0,
  word_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create usage_logs table
CREATE TABLE usage_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('essay_generation', 'ai_detection', 'humanization')),
  resource_used INTEGER NOT NULL DEFAULT 1,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_essays_user_id ON essays(user_id);
CREATE INDEX idx_essays_created_at ON essays(created_at DESC);
CREATE INDEX idx_usage_logs_user_id ON usage_logs(user_id);
CREATE INDEX idx_usage_logs_action ON usage_logs(action);
CREATE INDEX idx_usage_logs_created_at ON usage_logs(created_at DESC);

-- Enable Row Level Security on all tables
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE essays ENABLE ROW LEVEL SECURITY;
ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Plans: Read-only for authenticated users
CREATE POLICY "Plans are viewable by authenticated users" ON plans
  FOR SELECT TO authenticated USING (is_active = true);

-- Users: Users can only see and edit their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT TO authenticated USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE TO authenticated USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON users
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);

-- Essays: Users can only access their own essays
CREATE POLICY "Users can view own essays" ON essays
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own essays" ON essays
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own essays" ON essays
  FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own essays" ON essays
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Usage logs: Users can only view their own usage
CREATE POLICY "Users can view own usage logs" ON usage_logs
  FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own usage logs" ON usage_logs
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- Insert default plans
INSERT INTO plans (name, stripe_price_id, essay_quota, detector_quota, humanizer_chars, interval, price, features) VALUES
  ('Free', 'free', 3, 10, 5000, 'monthly', 0.00, '["3 Essays per month", "10 AI Detections", "5,000 Humanizer characters"]'),
  ('Pro', 'price_pro_monthly', 50, 200, 100000, 'monthly', 19.99, '["50 Essays per month", "200 AI Detections", "100,000 Humanizer characters", "Priority support"]'),
  ('Premium', 'price_premium_monthly', 200, 1000, 500000, 'monthly', 49.99, '["200 Essays per month", "1,000 AI Detections", "500,000 Humanizer characters", "Priority support", "Advanced features"]');

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO users (id, email, name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_essays_updated_at BEFORE UPDATE ON essays
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plans_updated_at BEFORE UPDATE ON plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column(); 