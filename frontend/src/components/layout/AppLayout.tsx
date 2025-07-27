import Header from './Header'
import Sidebar from './Sidebar'
import type { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
