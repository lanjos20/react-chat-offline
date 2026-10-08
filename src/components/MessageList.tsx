import { useLayoutEffect, useRef } from 'react'
import type { Message } from '../types/message'
import MessageBubble from './MessageBubble'

type MessageListProps = {
  messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
  const listRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const list = listRef.current

    if (list) list.scrollTop = list.scrollHeight
  }, [messages])

  return (
    <section
      ref={listRef}
      className="min-h-0 flex-1 overflow-y-auto p-4 pb-24"
      aria-label="Conversa"
      aria-live="polite"
    >
      {messages.length === 0 ? (
        <p className="flex h-full items-center justify-center text-center text-gray-600">
          Nenhuma mensagem ainda. Envie a primeira!
        </p>
      ) : (
        <ol className="flex flex-col gap-2">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
        </ol>
      )}
    </section>
  )
}
