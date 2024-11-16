import React from "react"
import { Button } from "../components/ui/button"
import { ScrollArea } from "../components/ui/scroll-area"
import { Home, UserPlus, Shield, History } from 'lucide-react'

export const ReportSidebar = () => {
  return (
    <aside className="w-[240px] border-r bg-muted/40">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold text-[#45e696]">Report System</h2>
        </div>
        <ScrollArea className="flex-1">
          <div className="space-y-2 p-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <UserPlus className="h-5 w-5" />
              <span>New report</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <History className="h-5 w-5" />
              <span>History</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Shield className="h-5 w-5" />
              <span>Admin</span>
            </Button>
          </div>
        </ScrollArea>
      </div>
    </aside>
  )
}


