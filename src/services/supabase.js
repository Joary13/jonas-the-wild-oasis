import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sdbdcglvmhppvmruaizw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYmRjZ2x2bWhwcHZtcnVhaXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1OTYwMzMsImV4cCI6MjAyOTE3MjAzM30.BBHPtfqtsiASoynqACRds1xKr-E4p0hpw3TY0GSYtwI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
