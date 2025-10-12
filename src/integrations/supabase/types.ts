export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      content_posts: {
        Row: {
          content_html: string | null
          content_md: string | null
          created_at: string
          id: number
          language_code: string | null
          meta_description: string | null
          public_url: string | null
          slug: string | null
          title: string
        }
        Insert: {
          content_html?: string | null
          content_md?: string | null
          created_at?: string
          id: number
          language_code?: string | null
          meta_description?: string | null
          public_url?: string | null
          slug?: string | null
          title: string
        }
        Update: {
          content_html?: string | null
          content_md?: string | null
          created_at?: string
          id?: number
          language_code?: string | null
          meta_description?: string | null
          public_url?: string | null
          slug?: string | null
          title?: string
        }
        Relationships: []
      }
      cookie_consent_rate_limit: {
        Row: {
          consent_count: number | null
          first_consent_at: string | null
          last_consent_at: string | null
          session_id: string
        }
        Insert: {
          consent_count?: number | null
          first_consent_at?: string | null
          last_consent_at?: string | null
          session_id: string
        }
        Update: {
          consent_count?: number | null
          first_consent_at?: string | null
          last_consent_at?: string | null
          session_id?: string
        }
        Relationships: []
      }
      cookie_consents: {
        Row: {
          analytics: boolean
          consent_date: string
          created_at: string
          essential: boolean
          id: string
          ip_address: unknown | null
          marketing: boolean
          preferences: boolean
          session_id: string
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          analytics?: boolean
          consent_date?: string
          created_at?: string
          essential?: boolean
          id?: string
          ip_address?: unknown | null
          marketing?: boolean
          preferences?: boolean
          session_id: string
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          analytics?: boolean
          consent_date?: string
          created_at?: string
          essential?: boolean
          id?: string
          ip_address?: unknown | null
          marketing?: boolean
          preferences?: boolean
          session_id?: string
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      linkedin_accounts: {
        Row: {
          access_token_encrypted: string | null
          created_at: string
          id: string
          is_active: boolean
          linkedin_user_id: string
          profile_data: Json | null
          refresh_token_encrypted: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token_encrypted?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          linkedin_user_id: string
          profile_data?: Json | null
          refresh_token_encrypted?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token_encrypted?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          linkedin_user_id?: string
          profile_data?: Json | null
          refresh_token_encrypted?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      linkedin_actions: {
        Row: {
          action_type: string
          campaign_id: string
          created_at: string
          error_message: string | null
          executed_at: string | null
          id: string
          message_content: string | null
          response_data: Json | null
          scheduled_at: string | null
          status: string
          target_profile_data: Json | null
          target_profile_id: string | null
        }
        Insert: {
          action_type: string
          campaign_id: string
          created_at?: string
          error_message?: string | null
          executed_at?: string | null
          id?: string
          message_content?: string | null
          response_data?: Json | null
          scheduled_at?: string | null
          status?: string
          target_profile_data?: Json | null
          target_profile_id?: string | null
        }
        Update: {
          action_type?: string
          campaign_id?: string
          created_at?: string
          error_message?: string | null
          executed_at?: string | null
          id?: string
          message_content?: string | null
          response_data?: Json | null
          scheduled_at?: string | null
          status?: string
          target_profile_data?: Json | null
          target_profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "linkedin_actions_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "linkedin_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      linkedin_campaigns: {
        Row: {
          automation_settings: Json | null
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          linkedin_account_id: string
          name: string
          start_date: string | null
          status: string
          target_audience: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          automation_settings?: Json | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          linkedin_account_id: string
          name: string
          start_date?: string | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          automation_settings?: Json | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          linkedin_account_id?: string
          name?: string
          start_date?: string | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "linkedin_campaigns_linkedin_account_id_fkey"
            columns: ["linkedin_account_id"]
            isOneToOne: false
            referencedRelation: "linkedin_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      sitemap_cache: {
        Row: {
          cache_key: string
          created_at: string
          generated_at: string
          id: string
          sitemap_xml: string
          updated_at: string
          url_count: number
        }
        Insert: {
          cache_key?: string
          created_at?: string
          generated_at?: string
          id?: string
          sitemap_xml: string
          updated_at?: string
          url_count?: number
        }
        Update: {
          cache_key?: string
          created_at?: string
          generated_at?: string
          id?: string
          sitemap_xml?: string
          updated_at?: string
          url_count?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_old_sitemap_cache: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      generate_slug: {
        Args: { title_text: string }
        Returns: string
      }
      migrate_linkedin_tokens: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      secure_migrate_existing_tokens: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      trigger_sitemap_regeneration: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
