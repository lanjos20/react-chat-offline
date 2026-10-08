import { useLayoutEffect, useRef, type ChangeEvent, type FormEvent, type KeyboardEvent } from 'react'
import type { Sender } from '../types/message'
import SenderToggle from './SenderToggle'

type ChatInputProps = {
  text: string
  sender: Sender
  onTextChange: (text: string) => void
  onSend: (text: string) => void
  onToggleSender: () => void
}

const MAX_TEXTAREA_HEIGHT = 160

export default function ChatInput({ text, sender, onTextChange, onSend, onToggleSender }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const isUser = sender === 'user'

  useLayoutEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`
    textarea.style.overflowY = textarea.scrollHeight > MAX_TEXTAREA_HEIGHT ? 'auto' : 'hidden'
  }, [text])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSend(text)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key.toLowerCase() !== 'enter' || event.shiftKey || event.nativeEvent.isComposing) return

    event.preventDefault()
    onSend(text)
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onTextChange(event.target.value)
  }

  return (
    <form
      className={`rounded-2xl border-2 bg-white p-3 shadow-sm transition-colors ${
        isUser ? 'border-gray-300' : 'border-purple-500'
      }`}
      onSubmit={handleSubmit}
      aria-label="Enviar mensagem"
    >
      <div className="flex items-end gap-3">
        <SenderToggle sender={sender} onToggle={onToggleSender} />
        <textarea
          ref={textareaRef}
          className="min-h-6 max-h-40 flex-1 resize-none overflow-y-auto rounded-md border-0 bg-transparent px-3 py-1.5 leading-6 outline-none"
          rows={1}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Digite uma mensagem..."
          aria-label="Mensagem"
        />
        <button
          className="shrink-0 rounded-md bg-stone-700 px-4 py-2 text-white hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={text.trim() === ''}
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
