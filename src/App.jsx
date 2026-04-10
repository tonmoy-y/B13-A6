import { Suspense, useState } from 'react'
import './App.css'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import Info from './Components/HeroBanner/Info'
import Navbar from './Components/Navbar/Navbar'
import ProductInfo from './Components/ProductInfo/ProductInfo'
import { ToastContainer } from 'react-toastify'
import GetStarted from './Components/GetStarted/GetStarted'
import Pricing from './Components/Pricing/Pricing'
import Transform from './Components/Transform/Transform'
import Footer from './Components/Footer/Footer'

const fetchProducts = async () => {
  const res = await fetch('/product.json');

  return res.json();

}

const fetchPricing = async () => {
  const res = await fetch('/pricing.json');

  return res.json();
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const productsPromise = fetchProducts();
  const pricingPromise = fetchPricing();

// console.log(productsPromise);

  return (
    <>
     <Navbar cartItems ={cartItems} setCartItems = {setCartItems}> </Navbar>
     <HeroBanner> </HeroBanner>
     <Info> </Info>
    
     <Suspense fallback={<div className='flex justify-center items-center'> <span className="loading loading-spinner loading-xl"></span> </div> }>
      <ProductInfo productsPromise = {productsPromise} cartItems = {cartItems} setCartItems = {setCartItems} ></ProductInfo>
     </Suspense>
     <ToastContainer> </ToastContainer>
     <GetStarted> </GetStarted>
     <Suspense fallback={<div className='flex justify-center items-center'> <span className="loading loading-spinner loading-xl"></span> </div>}>
      <Pricing pricingPromise = {pricingPromise}> </Pricing>
     </Suspense>
     <Transform> </Transform>
     <Footer></Footer>
    </>
  )
}

export default App
