# Protocolo de Segurança Preventiva - ICA01

## 1. Avaliação de Risco (Gatilho: Recebimento de Tarefa)
Sempre que uma nova tarefa for solicitada, o núcleo ICA01 deve avaliar o risco de corrupção do sistema ou da interface.

## 2. Níveis de Alerta
- **BAIXO:** Operações de leitura, criação de arquivos simples em workspace. (Ação: Prosseguir).
- **MÉDIO:** Alterações em arquivos de configuração (.json, .yaml), edição de scripts existentes. (Ação: Avisar e sugerir backup).
- **ALTO:** Alterações em CSS/HTML da HUD, comandos `exec` destrutivos, modificação do core. (Ação: Bloquear e exigir confirmação de backup).

## 3. Fluxo de Confirmação
Se Risco >= MÉDIO:
> "⚠️ **ADVERTÊNCIA DE SOBERANIA:** Esta ação pode corromper a interface ou o core. Deseja realizar um backup preventivo agora antes de prosseguir?"

## 4. Botão de Emergência
O arquivo `rollback.sh` deve ser mantido atualizado a cada backup bem-sucedido.
