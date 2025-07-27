import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import Login from '@/pages/auth/Login'
import AppLayout from '@/components/layout/AppLayout'
import PrivateRoute from './PrivateRoute'

export default function AppRoutes() {
  const isAuthenticated = true // Replace with real auth logic

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/" element={<Login />} />

        {/* Private Route: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AppLayout>
                <Dashboard />
              </AppLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}
