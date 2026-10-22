import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dmmqiwbkgmgwlgqsnddf.supabase.co"
const supabasePublishableKey = "sb_publishable_ZAGmH1sdiFPaig3Kj_njdA_ugfL5iTw"

export const supabase = createClient(
  supabaseUrl, 
  supabasePublishableKey
)