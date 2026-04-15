import { createClient } from '@supabase/supabase-js';

const URL = "https://evxdiloiszgicdgmzklx.supabase.co";

const API_KEY = "sb_publishable_mz2HCw1MEVEuIlrhlXWPxg_Y7shKEpo";

export const supabase = createClient(URL, API_KEY);


