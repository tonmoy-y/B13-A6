import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cartItems, setCartItems}) => {
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.price;
    });
    const handleRemove = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
        setCartItems(updatedCart);
        toast.error(`${item.name} is removed from cart!`);
    }
    const handleCheckout = () => {
        setCartItems([]);
        toast.success('Checkout successful!');
    }
    return (
        <div className='container mx-auto manrope-font'>
            <div className='border border-[#f2f2f2] p-8 space-y-6'>
                <h1 className='text-2xl font-bold'>Your Cart</h1>

            {
                cartItems.map(item => (
                    <div key = {item.id} className='bg-base-200 p-5 rounded-2xl'>
                        <div className='flex items-center gap-4 '>
                            <div className=''><img src={item.icon} alt="" className='bg-white p-3.5 rounded-full'/></div>
                            <div>
                                <h1 className='text-xl font-semibold'>{item.name}</h1>
                                <p className='font-medium text-secondary'>${item.price}</p>
                            </div>
                            <button onClick={() => handleRemove(item)} className='btn btn-ghost ml-auto'>Remove</button>
                        </div>
                        
                    </div>
                ))
            }
             {cartItems.length ? 
                <div className='space-y-4'>

                <div className='flex items-center justify-between'>
                <p className='text-secondary'>Total</p>
                <h2 className='text-2xl font-bold'>${totalPrice}</h2>
            </div>
            <button onClick={handleCheckout} className='btn btn-primary w-full rounded-full'> Proceed To Checkout</button> 
                </div>
            : (<h2 className='text-xl font-semibold text-center'>Your cart is empty!</h2>)
        }
        </div>
        </div>
    );
};

export default Cart;