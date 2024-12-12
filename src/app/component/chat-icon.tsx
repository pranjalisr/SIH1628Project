import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ChatIcon({ onClick }: { onClick: () => void }) {
  return (
    <Button
      className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg"
      onClick={onClick}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}

