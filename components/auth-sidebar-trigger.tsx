'use client'

import { useAuth } from '@/hooks/use-auth'

import { SidebarTrigger } from '@/components/ui/sidebar'

interface AuthSidebarTriggerProps {
  className?: string
}

export default function AuthSidebarTrigger({ className }: AuthSidebarTriggerProps) {
  const { isAuthenticated, loading } = useAuth()

  // Don't render anything while loading to prevent flash
  if (loading) {
    return null
  }

  // Only render sidebar trigger for authenticated users
  if (!isAuthenticated) {
    return null
  }

  return <SidebarTrigger className={className} />
}
