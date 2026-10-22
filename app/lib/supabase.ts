import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://dmmqiwbkgmgwlgqsnddf.supabase.co"
const supabasePublishableKey = "sb_publishable_ZAGmH1sdiFPaig3Kj_njdA_ugfL5iTw"

if (!supabaseUrl || !supabasePublishableKey) {
  console.error("Supabase 환경 변수(URL/PUBLISHABLE_KEY)가 누락되었습니다. .env.local 파일을 확인하세요.");
  throw new Error("Supabase 환경 변수(URL/PUBLISHABLE_KEY)가 누락되었습니다. .env.local 파일을 확인하세요.");
}
export const supabase = createClient(
  supabaseUrl, 
  supabasePublishableKey
)
