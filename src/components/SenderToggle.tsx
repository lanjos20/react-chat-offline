import type { Sender } from '../types/message'

type SenderToggleProps = {
  sender: Sender
  onToggle: () => void
}

export default function SenderToggle({ sender, onToggle }: SenderToggleProps) {
  const isUser = sender === 'user'

  return (
    <button
      className="flex shrink-0 items-center gap-2 rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
      type="button"
      onClick={onToggle}
      aria-pressed={!isUser}
      aria-label={`Alternar para ${isUser ? 'robô' : 'usuário'}`}
    >
      {isUser ? (
        <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 21a8 8 0 0 0-16 0m8-10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" className="size-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v2m-5 4h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm-2 5H3m18 0h-2M9 13h.01M15 13h.01M9 17h6" />
        </svg>
      )}
    </button>
  )
}
