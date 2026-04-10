import React from 'react';
import user from '../../assets/user.png';
import packages from '../../assets/package.png';
import rocket from '../../assets/rocket.png';

const GetStarted = () => {
    return (
        <div className=' mx-auto manrope-font bg-[#F9FAFC] flex flex-col items-center justify-center py-30 px-4'>
            <div className='container'>

            <h1 className='font-bold text-4xl mb-4 text-center'>Get Started in 3 Steps</h1>
            <p className='text-secondary text-center'>Start Using premium digital tolls in minutes not hours</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-7'>
                <div className='bg-white p-5 flex flex-col justify-center items-center space-y-4 rounded-2xl'>
                    <div className='flex justify-end ml-auto mb-7'>

                        <div className=' flex items-center justify-center w-10 h-10 bg-primary  text-white rounded-full'>
                            <p className=''>01</p>
                        </div>
                    </div>
                    <div className='rounded-full bg-[#F2F2F2] w-fit'>

                        <img src={user} alt="" className='p-6' />
                    </div>
                    <h2 className='text-2xl font-bold'>Create Account</h2>
                    <p className='text-secondary mb-16 text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='bg-white p-5 flex flex-col justify-center items-center space-y-4 rounded-2xl'>
                    <div className='flex justify-end ml-auto mb-7'>

                        <div className=' flex items-center justify-center w-10 h-10 bg-primary  text-white rounded-full'>
                            <p className=''>02</p>
                        </div>
                    </div>
                    <div className='rounded-full bg-[#F2F2F2] w-fit'>

                        <img src={packages} alt="" className='p-6' />
                    </div>
                    <h2 className='text-2xl font-bold'>Choose Products</h2>
                    <p className='text-secondary mb-16 text-center'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='bg-white p-5 flex flex-col justify-center items-center space-y-4 rounded-2xl'>
                    <div className='flex justify-end ml-auto mb-7'>

                        <div className=' flex items-center justify-center w-10 h-10 bg-primary  text-white rounded-full'>
                            <p className=''>03</p>
                        </div>
                    </div>
                    <div className='rounded-full bg-[#F2F2F2] w-fit'>

                        <img src={rocket} alt="" className='p-6' />
                    </div>
                    <h2 className='text-2xl font-bold'>Start Creating</h2>
                    <p className='text-secondary mb-16 text-center'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default GetStarted;