
import { Sidebar } from "@/components/sidebar"
import { Navbar } from "@/components/navbar"
import { VesselList } from "@/components/vesselList"


export default function VesselsPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-6 px-4">
          <VesselList/>
          </div>
        </main>
      </div>
    </div>
  )
}

