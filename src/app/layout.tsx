import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import {Sidebar} from "@/components/sidebar"

import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vessel Management System",
  description: "Track and manage vessels efficiently",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-50">
          
          <div className="flex-1 flex flex-col overflow-hidden">
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

