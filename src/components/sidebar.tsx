import Link from "next/link"
import { BarChart2, Calendar, Ship, Users } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 bg-[#0288D1] text-white min-h-screen p-4">
      <div className="text-3xl font-bold mb-8 pl-4">DBCT</div>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-white/10">
          <BarChart2 className="h-5 w-5" />
          <span>Dashboard</span>
        </Link>
        <Link href="/schedule" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-white/10">
          <Calendar className="h-5 w-5" />
          <span>Schedule</span>
        </Link>
        <Link href="/vessels" className="flex items-center space-x-3 px-4 py-2 bg-white/10 rounded">
          <Ship className="h-5 w-5" />
          <span>Vessels</span>
        </Link>
        <Link href="/users" className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-white/10">
          <Users className="h-5 w-5" />
          <span>Users</span>
        </Link>
      </nav>
    </div>
  )
}

