import React, { use, useState } from 'react';
import Products from './Products';
import Cart from './Cart';

const ProductInfo = ({productsPromise ,cartItems, setCartItems}) => {
    const products = use(productsPromise);
    console.log(products);
    const [selectedType, setSelectedType] = useState('Products'); 
    return (
        <div className='container manrope-font mx-auto'>
            <div className='py-40 '>
        <div className='flex flex-col items-center space-y-3.5 mb-4'>
            <h1 className='text-4xl font-bold text-center'>Premium Digital Tools</h1>
            <p className='text-secondary'>Choose from our curated collection of premium digital products <br /> designed to boost your productivity and creativity.</p>
            <div className='flex gap-3'>
                <button onClick={() => setSelectedType('Products')} className={`btn ${selectedType === 'Products' ? 'bg-linear-to-r from-[#4F39F6] via-[#801FF9] to-[#9514FA] text-white' : 'btn-ghost text-primary'} rounded-full  font-bold`}> Products</button>
                <button onClick={() => setSelectedType('Cart')} className={`btn ${selectedType === 'Cart' ? 'bg-linear-to-r from-[#4F39F6] via-[#801FF9] to-[#9514FA] text-white' : 'btn-ghost text-primary'} rounded-full  font-bold`}>Cart({cartItems.length})</button>
            </div>
        </div>
        {
            selectedType === 'Products' ? 
        <div className=' grid grid-cols-3 gap-5'>
           { products.map(product => (
            <Products key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems} ></Products>
           ))}
        </div>
            
            : <Cart cartItems = {cartItems} setCartItems={setCartItems}> </Cart>
        }
            </div>
        </div>
    );
};

export default ProductInfo;