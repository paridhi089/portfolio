import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://portfolio-28c.pages.dev/supabase"
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseAnonKey)
export default supabase
