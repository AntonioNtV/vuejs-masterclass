import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://emivktfxungjieuwvoox.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtaXZrdGZ4dW5namlldXd2b294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNjE1NjQsImV4cCI6MjAzODczNzU2NH0.ciaEkSiQCf6WzEh-yDyK8DUnW46HY8csyvvvX7M96mw'
)
