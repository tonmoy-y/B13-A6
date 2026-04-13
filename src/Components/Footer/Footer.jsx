import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { TbBrandInstagramFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#101727] px-4'>
            <div className='py-20 container mx-auto manrope-font text-white/80 border-b border-b-white/30'>
                <div className='grid grid-cols-2 gap-y-7 md:grid-cols-3 lg:grid-cols-6'>
                    <div className='col-span-2 space-y-2.5 pr-10'>
                        <h2 className='text-4xl font-bold'>DigiTools</h2>
                        <p className='opacity-80 leading-7'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='space-y-4 '>
                        <h2 className='text-xl font-medium leading-7'>Product</h2>
                        <ul className='space-y-4'>
                            <li className='opacity-80'><a href=""> Features</a></li>
                            <li className='opacity-80'><a href=""> Pricing</a></li>
                            <li className='opacity-80'><a href=""> Templates</a></li>
                            <li className='opacity-80'><a href=""> Integrations</a></li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium leading-7'>Company</h2>
                        <ul className='space-y-4'>
                            <li className='opacity-80'><a href=""> About</a></li>
                            <li className='opacity-80'><a href=""> Blog</a></li>
                            <li className='opacity-80'><a href=""> Careers</a></li>
                            <li className='opacity-80'><a href=""> Press</a></li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium leading-7'>Resources</h2>
                        <ul className='space-y-4'>
                            <li className='opacity-80'><a href=""> Documentation</a></li>
                            <li className='opacity-80'><a href=""> Help Center</a></li>
                            <li className='opacity-80'><a href=""> Community</a></li>
                            <li className='opacity-80'><a href=""> Contact</a></li>
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium leading-7'>Social Links</h2>
                        <ul className='flex items-center gap-4'>
                            <li className=' p-2 rounded-full bg-[#ffffff] flex items-center justify-center'>
                                <a className='text-black' href=""><TbBrandInstagramFilled size={28} /></a>
                            </li>

                            <li className=' p-3 rounded-full bg-white flex items-center justify-center'>
                                <a className='text-black' href=""><FaFacebookSquare size={20} /></a>
                            </li>

                            <li className=' p-3 rounded-full bg-white flex items-center justify-center'>
                                <a className='text-black' href=""><FaXTwitter size={20} /></a>
                            </li>
                        </ul>
                    </div>


                    <div></div>
                </div>
            </div>
            <div className='py-6 flex justify-between text-[#FAFAFA]/80'>
            <div><p>© 2026 Digitools. All rights reserved.</p></div>
            <div className='flex gap-2 md:gap-10'>
                <div><a> Privacy Policy</a> </div>
            <div> <a> Terms of Service</a> </div>
            <div><a>Cookies</a> </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;