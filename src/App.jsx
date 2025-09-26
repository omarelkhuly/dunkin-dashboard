import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopHeader from './components/TopHeader'
import MainHeader from './components/MainHeader'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Rewards from "./pages/Rewards";
import Login from './pages/Login'
import Location from "./pages/Location";
import Delvery from "./pages/Delvery";
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DunkinCard from './pages/DunkinCard'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          {/* ✅ هنا استبدلنا Header ب TopHeader + MainHeader */}
          <TopHeader />
          <MainHeader />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/location" element={<Location />} />
            <Route path="/Delvery" element={<Delvery />} />
            <Route path="/DunkinCard" element={<DunkinCard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          <Footer />
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
