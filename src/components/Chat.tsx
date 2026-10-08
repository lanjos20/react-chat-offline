import { useState } from 'react'
import type { Message } from '../types/message'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState('')

  function handleSend(messageText: string) {
    if (messageText.trim() === '') return

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: crypto.randomUUID(),
        text: messageText,
        sender: 'user',
      },
    ])
    setText('')
  }

  return (
    <div className="min-h-dvh bg-stone-200">
      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col bg-white shadow-sm" aria-label="Chat">
        <MessageList messages={messages} />
        <div className="p-4 pt-2">
          <ChatInput text={text} onTextChange={setText} onSend={handleSend} />
        </div>
      </main>
    </div>
  )
}