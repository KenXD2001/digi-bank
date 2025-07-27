import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // fake login logic
    navigate('/dashboard')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Button className="w-full" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
