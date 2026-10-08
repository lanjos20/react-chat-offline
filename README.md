# Chat Offline

Aplicação de chat simples, responsiva e executada no navegador. Permite enviar mensagens alternando entre dois remetentes — usuário e robô — sem backend ou conta.

## Funcionalidades

- Histórico de mensagens em ordem cronológica, com mensagens do usuário à direita e do robô à esquerda.
- Alternância de remetente pelo ícone à esquerda do campo de mensagem; o modo robô é indicado pela borda roxa no input.
- Campo de texto multilinha que cresce conforme o conteúdo, até um limite, e permite rolagem interna.
- `Enter` envia a mensagem e `Shift + Enter` insere uma quebra de linha.
- Botão de envio desabilitado quando o campo está vazio.
- Rolagem automática para a mensagem mais recente e indicação quando o histórico está vazio.
- Layout centralizado e responsivo.

As mensagens ficam somente na memória da aplicação: não são salvas no navegador nem em um servidor e desaparecem ao recarregar a página.

## Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Como executar

É necessário ter Node.js e npm instalados.

```bash
npm install
npm run dev
```

Abra no navegador o endereço local informado pelo Vite no terminal.

## Comandos disponíveis

```bash
npm run dev      # inicia o servidor de desenvolvimento
npm run lint     # verifica o código com Oxlint
npm run build    # verifica os tipos e gera a versão de produção
npm run preview  # serve localmente a versão gerada pelo build
```

Para testar a versão de produção, execute `npm run build` antes de `npm run preview`.

## Estrutura do projeto

```text
src/
├── components/
│   ├── Chat.tsx           # estado do chat e composição da tela
│   ├── ChatInput.tsx      # campo de texto, envio e alternância do remetente
│   ├── MessageBubble.tsx  # apresentação de cada mensagem
│   ├── MessageList.tsx    # histórico, estado vazio e rolagem automática
│   └── SenderToggle.tsx   # controle de remetente por ícone
├── types/
│   └── message.ts         # tipos Sender e Message
├── App.tsx
└── main.tsx
```
