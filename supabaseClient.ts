
import { createClient } from 'https://esm.sh/@supabase/supabase-js@^2.45.0';

// Nota: Em um ambiente de produção real, estas chaves viriam de process.env
// Para este projeto, assumimos que o provedor injeta as variáveis necessárias.
const supabaseUrl = (window as any).process?.env?.SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = (window as any).process?.env?.SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
