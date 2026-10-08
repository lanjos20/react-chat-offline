import { useState } from 'react'
import type { Message } from '../types/message'
import MessageList from './MessageList'

export default function Chat() {
  const [messages] = useState<Message[]>([])

  return (
    <div className="min-h-dvh bg-stone-200">
      <main className="mx-auto flex min-h-dvh max-w-2xl flex-col bg-white shadow-sm" aria-label="Chat">
        <MessageList messages={messages} />
      </main>
    </div>
  )
}