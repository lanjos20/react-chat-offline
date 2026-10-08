import { useState } from 'react'
import type { Message, Sender } from '../types/message'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState('')
  const [sender, setSender] = useState<Sender>('user')

  function handleSend(messageText: string) {
    if (messageText.trim() === '') return

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        text: messageText,
        sender,
      },
    ])
    setText('')
  }

  return (
    <div className="min-h-dvh bg-stone-200">
      <main className="mx-auto flex h-dvh max-w-2xl flex-col bg-stone-200 shadow-sm" aria-label="Chat">
        <MessageList messages={messages} />
        <div className="p-4 pb-6 pt-2">
          <ChatInput
            text={text}
            sender={sender}
            onTextChange={setText}
            onSend={handleSend}
            onToggleSender={() => setSender((currentSender) => (currentSender === 'user' ? 'robot' : 'user'))}
          />
        </div>
      </main>
    </div>
  )
}