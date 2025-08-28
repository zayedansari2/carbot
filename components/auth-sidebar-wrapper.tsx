'use client'

import { useAuth } from '@/hooks/use-auth'

import AppSidebar from './app-sidebar'

export default function AuthSidebarWrapper() {
  const { isAuthenticated, loading } = useAuth()

  // Don't render anything while loading to prevent flash
  if (loading) {
    return null
  }

  // Only render sidebar for authenticated users
  if (!isAuthenticated) {
    return null
  }

  return <AppSidebar />
}
