-- Create essays table
CREATE TABLE IF NOT EXISTS essays (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    topic TEXT NOT NULL,
    requirements TEXT,
    sources TEXT,
    length INTEGER NOT NULL DEFAULT 1000,
    essay_type TEXT NOT NULL,
    writing_style TEXT NOT NULL,
    citation_style TEXT NOT NULL,
    word_count INTEGER NOT NULL DEFAULT 0,
    character_count INTEGER NOT NULL DEFAULT 0,
    is_humanized BOOLEAN NOT NULL DEFAULT FALSE,
    custom_emoji TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS essays_user_id_idx ON essays(user_id);
CREATE INDEX IF NOT EXISTS essays_created_at_idx ON essays(created_at DESC);
CREATE INDEX IF NOT EXISTS essays_essay_type_idx ON essays(essay_type);

-- Enable Row Level Security (RLS)
ALTER TABLE essays ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own essays
CREATE POLICY "Users can view their own essays" ON essays
    FOR SELECT USING (auth.uid() = user_id);

-- Users can only insert their own essays
CREATE POLICY "Users can insert their own essays" ON essays
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only update their own essays
CREATE POLICY "Users can update their own essays" ON essays
    FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own essays
CREATE POLICY "Users can delete their own essays" ON essays
    FOR DELETE USING (auth.uid() = user_id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_essays_updated_at 
    BEFORE UPDATE ON essays 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create usage tracking table for future analytics
CREATE TABLE IF NOT EXISTS usage_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    action TEXT NOT NULL, -- 'essay_generation', 'ai_detection', 'humanization'
    count INTEGER NOT NULL DEFAULT 1,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for usage_logs
ALTER TABLE usage_logs ENABLE ROW LEVEL SECURITY;

-- RLS policies for usage_logs
CREATE POLICY "Users can view their own usage logs" ON usage_logs
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can insert usage logs" ON usage_logs
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create index for usage_logs
CREATE INDEX IF NOT EXISTS usage_logs_user_id_idx ON usage_logs(user_id);
CREATE INDEX IF NOT EXISTS usage_logs_created_at_idx ON usage_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS usage_logs_action_idx ON usage_logs(action); 