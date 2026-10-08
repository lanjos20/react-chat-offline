import type { Message } from '../types/message'

type MessageBubbleProps = {
  message: Message
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user'
  const alignment = isUser ? 'justify-end' : 'justify-start'
  const background = isUser ? 'bg-gray-100' : 'bg-white'

  return (
    <li className={`flex ${alignment}`}>
      <p className={`max-w-[80%] wrap-break-word whitespace-pre-wrap rounded-lg px-4 py-2 ${background}`}>
        {message.text}
      </p>
    </li>
  )
}
