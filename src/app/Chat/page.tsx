'use client'

import { useState } from 'react'
import { Chat } from '@/components/chat'
import { ChatIcon } from '@/components/chat-icon'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Gemini Chatbot</h1>
      <p className="text-xl mb-4">Click the chat icon to start a conversation!</p>
      <Alert className="max-w-md mb-8">
        <AlertTitle>Important Setup Instructions</AlertTitle>
        <AlertDescription>
          Make sure to set the GEMINI_API_KEY environment variable with your Gemini API key before using the chatbot.
        </AlertDescription>
      </Alert>
      {isChatOpen ? (
        <div className="fixed bottom-4 right-4 z-50">
          <Chat onClose={toggleChat} />
        </div>
      ) : (
        <ChatIcon onClick={toggleChat} />
      )}
    </main>
  )
}

