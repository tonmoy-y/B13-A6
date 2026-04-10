import React from 'react';
import cart from '../../assets/products/shopping-cart.png';

const Navbar = ({cartItems}) => {
    return (
      <div className='border-b border-b-[#f3ecec] py-3'>

        <div className='container mx-auto manrope-font '>
            <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
        <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
     
      <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost pointer-events-none md:pointer-events-auto text-2xl font-bold text-[#9514FA]">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
     
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-1 md:gap-2">
    <a className="btn btn-ghost -mr-4 md:mr-0 pointer-events-none"><img src={cart} alt="" /> {cartItems.length}</a>
    <a className="btn btn-ghost rounded-full">Login</a>
    <a className="btn btn-primary rounded-full">Get Started</a>
  </div>
</div>
          </div>
        </div>
    );
};

export default Navbar;