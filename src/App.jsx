import { useState } from 'react'
// import './App.css'
import Home from './Pages/HomePage/Home'
import { Routes,Route } from 'react-router-dom'
import Product from './Pages/ProductPage/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './Pages/SignUp/SignUp'
import LoginPage from './Pages/Login/LoginPage'
import Cart from './Pages/CartPage/Cart'
import SingleProd from './Pages/SingleProductPage/SingleProd'
import PrivateRoute from './context/PrivateRoute'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <Navbar count={count} setCount={setCount}></Navbar>
    <Routes>
        <Route path="/" element={<Home count={count} />} />
        <Route path="/product" element={<Product count={count} />} />
        <Route path="/signup" element={<SignUp count={count} />} />
        <Route path="/login" element={<LoginPage count={count} />} />
        <Route path="/cart" element={<PrivateRoute><Cart count={count} /></PrivateRoute>} />
        <Route path="/product/:id" element={<SingleProd count={count} />} /> 
      </Routes>
      <Footer count={count}></Footer>
    </>
  )
}

export default App
