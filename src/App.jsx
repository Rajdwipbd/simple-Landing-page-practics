
import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Home from './pages/Hero'
import Footer from './pages/Footer'

function App() {
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    fetch('product.json').then(res=>res.json())
    .then(data=>setProducts(data))

  },[])
  return (
    <>
    <Navbar />
    <Home />
    <Product products={products} />
    <Footer />
    </>
  )
}

export default App
