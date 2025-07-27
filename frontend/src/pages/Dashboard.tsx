import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <Input id="search" placeholder="Search something..." />
      </div>
    </div>
  )
}
