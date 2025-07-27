import { Navigate } from 'react-router-dom'

export default function PrivateRoute({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode
  isAuthenticated: boolean
}) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />
}
