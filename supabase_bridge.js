import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://iffvgltxnahzsoaqqfgf.supabase.co'
const SUPABASE_KEY = 'sb_publishable_10pV-F0Qf9z7Hd9M1w39Ww_oIwrXFJT'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

console.log('ICA01 Nucleus: Monitorando Supabase...')

supabase
  .channel('public:messages')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, payload => {
    if (payload.new.sender === 'user') {
      console.log('Mensagem recebida do Arquiteto:', payload.new.text)
      // Aqui o agente processaria a lógica. Como estou na sessão, 
      // vou apenas registrar que o canal está aberto.
    }
  })
  .subscribe()
