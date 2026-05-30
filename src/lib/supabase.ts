import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtdeyaeustcagtnwhpwl.supabase.co';
const supabaseAnonKey = 'sb_publishable_9p8nUryUFuq5Cx7wsLfvHg_idMOVCoi';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
