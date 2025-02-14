import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Checkout from './components/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu/:id" element={<Menu />} />
  </Routes>
)

export default Rotas
