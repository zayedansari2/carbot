import { Suspense } from 'react'
import Link from 'next/link'

import { Plus } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'

import { ChatHistorySection } from './sidebar/chat-history-section'
import { ChatHistorySkeleton } from './sidebar/chat-history-skeleton'
import { Logo } from './ui/icons'
import AuthSidebarTrigger from './auth-sidebar-trigger'

export default function AppSidebar() {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="offcanvas">
      <SidebarHeader className="flex flex-row justify-between items-center px-3 py-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-3 flex-1"
        >
          <Logo className={cn('size-6')} variant="default" priority />
          <span className="carbot-logo text-brand-blue">CarBot</span>
        </Link>
        <AuthSidebarTrigger />
      </SidebarHeader>
      <SidebarContent className="flex flex-col px-3 py-4 h-full">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/" className="flex items-center gap-3 py-3">
                <Plus className="size-5 text-brand-blue" />
                <span className="text-brand-blue text-base font-medium">
                  New
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<ChatHistorySkeleton />}>
            <ChatHistorySection />
          </Suspense>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
