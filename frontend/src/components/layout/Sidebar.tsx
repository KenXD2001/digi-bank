import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow h-full p-4">
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
        </Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  )
}
