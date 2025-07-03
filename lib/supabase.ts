import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bvvxdxucieskrlqbryhw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2dnhkeHVjaWVza3JscWJyeWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MDcwNTgsImV4cCI6MjA2NzA4MzA1OH0.JfXc78DwWKkngDLiVOLSEsBPeKinLijV0DdcGBsWCaw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
