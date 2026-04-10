import { Suspense, useState } from 'react'
import './App.css'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Info from './Components/HeroBanner/Info'
import Navbar from './Components/Navbar/Navbar'
import ProductInfo from './Components/ProductInfo/ProductInfo'
import { ToastContainer } from 'react-toastify'
import GetStarted from './Components/GetStarted/GetStarted'

const fetchProducts = async () => {
  const res = await fetch('/product.json');

  return res.json();

}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const productsPromise = fetchProducts();

// console.log(productsPromise);

  return (
    <>
     <Navbar cartItems ={cartItems} setCartItems = {setCartItems}> </Navbar>
     <HeroBanner> </HeroBanner>
     <Info> </Info>
  
     <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <ProductInfo productsPromise = {productsPromise} cartItems = {cartItems} setCartItems = {setCartItems} ></ProductInfo>
     </Suspense>
     <ToastContainer> </ToastContainer>
     <GetStarted> </GetStarted>
     
    </>
  )
}

export default App
