# Supabase Response Script
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabase = createClient('https://iffvgltxnahzsoaqqfgf.supabase.co', 'sb_publishable_10pV-F0Qf9z7Hd9M1w39Ww_oIwrXFJT')

async function testResponse() {
    await supabase.from('messages').insert([{ 
        text: 'CONEXÃO ICA01: SISTEMA OPERACIONAL. AGUARDANDO COMANDOS DO ARQUITETO.', 
        sender: 'agent',
        created_at: new Date() 
    }])
}
testResponse()