import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Products = ({product, cartItems, setCartItems}) => {
    const [selected, setSelected] = useState(false);
    const {name, description, price ,period,tag,features,icon} = product;
    const buyNowHandler = (product) => {
        setCartItems([...cartItems,product]);
        setSelected(true);
        toast.success(`${product.name} is added to cart!`);
    }
    return (
        <div className='container mx-auto'>
 <div className='border border-[#F2F2F2] rounded-2xl p-6 space-y-4 relative'>
    <div className='flex justify-end absolute  top-2 right-2'>
        {
            tag === "Best Seller" && (
      <span className='bg-[#FEF3C6] py-1.5 px-3  text-[#BB4D00] text-sm rounded-full'>{tag}</span>
        )
    }
    {
            tag === "New" && (
      <span className='bg-[#DBFCE7] py-1.5 px-3  text-[#0A883E] text-sm rounded-full'>{tag}</span>
        )
    }
    {
            tag === "Popular" && (
      <span className='bg-[#E1E7FF] py-1.5 px-3  text-primary text-sm rounded-full'>{tag}</span>
        )
    }
    </div>
    <div className='border border-[#f2f2f2] rounded-full w-fit'>
        <img src={icon} alt={name} className='p-3.5'/>
    </div>
    <h1 className='font-bold text-2xl'>
        {name}
    </h1>
    <p className='text-secondary'>
        {description}
    </p>
    <h1><span className='text-2xl font-bold'>${price}</span>/<span className='text-secondary'>{period}</span></h1>
    <ul className='text-secondary flex-1'>
        {features.map(feature => (
            <li key={feature}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        ))}
    </ul>
    {
        selected ? <button onClick={() => buyNowHandler(product)} className='btn btn-soft w-full rounded-full pointer-events-none' >Added to cart</button> : <button onClick={() => buyNowHandler(product)} className='btn btn-primary w-full rounded-full'>Buy Now</button>
    }
 </div>
        </div>
    );
};

export default Products;