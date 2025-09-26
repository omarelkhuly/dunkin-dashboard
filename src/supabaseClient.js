import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://eqemvzrbauubggfifxqv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxZW12enJiYXV1YmdnZmlmeHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NTc3NDQsImV4cCI6MjA3NDEzMzc0NH0.CyK13zQgcwxmoMSKUGQeCJohBgTJNrHOGG0hqp3HYuw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
