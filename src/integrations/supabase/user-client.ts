import { createClient } from "@supabase/supabase-js";

// Customer's own Supabase project (leads are stored here).
// Publishable key is safe to ship in client code.
const USER_SUPABASE_URL = "https://ckuxvlgrtwvzhejkgabg.supabase.co";
const USER_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_gJHH-essn9Av9qVOFha_Pg_eIsuZden";

export const userSupabase = createClient(USER_SUPABASE_URL, USER_SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
