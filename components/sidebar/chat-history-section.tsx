'use client'

import { useAuth } from '@/hooks/use-auth'

import { ChatHistoryClient } from './chat-history-client'

export function ChatHistorySection() {
  const { isAuthenticated, loading } = useAuth()
  const enableSaveChatHistory = process.env.NEXT_PUBLIC_ENABLE_SAVE_CHAT_HISTORY === 'true'
  
  // Don't render anything while loading to prevent flash
  if (loading) {
    return null
  }

  // Only render chat history for authenticated users
  if (!isAuthenticated || !enableSaveChatHistory) {
    return null
  }

  return <ChatHistoryClient />
}
