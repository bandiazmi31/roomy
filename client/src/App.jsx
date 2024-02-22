import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import AdminDashboard from './components/AdminDash'
import AdminLogin from './components/AdminLogin'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
