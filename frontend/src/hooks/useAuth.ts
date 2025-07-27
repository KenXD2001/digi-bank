import { useEffect, useState } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // TODO: Replace with actual check
    setIsAuthenticated(true)
  }, [])

  return { isAuthenticated }
}
