export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          plan_id: string | null
          stripe_customer_id: string | null
          subscription_status: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          plan_id?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          plan_id?: string | null
          stripe_customer_id?: string | null
          subscription_status?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      essays: {
        Row: {
          id: string
          user_id: string
          title: string
          content: string
          original_content: string | null
          topic: string
          length: number
          essay_type: string
          writing_style: string
          citation_style: string
          ai_detection_score: number | null
          humanized_score: number | null
          is_humanized: boolean
          character_count: number
          word_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          content: string
          original_content?: string | null
          topic: string
          length: number
          essay_type: string
          writing_style: string
          citation_style: string
          ai_detection_score?: number | null
          humanized_score?: number | null
          is_humanized?: boolean
          character_count: number
          word_count: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          content?: string
          original_content?: string | null
          topic?: string
          length?: number
          essay_type?: string
          writing_style?: string
          citation_style?: string
          ai_detection_score?: number | null
          humanized_score?: number | null
          is_humanized?: boolean
          character_count?: number
          word_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          name: string
          stripe_price_id: string
          essay_quota: number
          detector_quota: number
          humanizer_chars: number
          interval: string
          price: number
          features: string[]
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          stripe_price_id: string
          essay_quota: number
          detector_quota: number
          humanizer_chars: number
          interval: string
          price: number
          features: string[]
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          stripe_price_id?: string
          essay_quota?: number
          detector_quota?: number
          humanizer_chars?: number
          interval?: string
          price?: number
          features?: string[]
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      usage_logs: {
        Row: {
          id: string
          user_id: string
          action: string
          resource_used: number
          metadata: Record<string, any> | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          resource_used: number
          metadata?: Record<string, any> | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          resource_used?: number
          metadata?: Record<string, any> | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
} 