import React from 'react';

const Transform = () => {
    return (
        <div className='manrope-font  py-30 bg-linear-to-r from-[#4F39F6] via-[#801FF9] to-[#9514FA]'>
            <div className='container mx-auto flex flex-col items-center justify-center gap-5'>
                <h1 className='text-[40px] text-white font-bold text-center'>Ready to Transform Your Workflow?</h1>
                <p className='text-white text-center opacity-90'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                <div className='flex gap-4 mt-5'>
                    <button className='btn text-primary rounded-full'>Explore Products</button>
                <button className='btn btn-ghost btn-primary border-white text-white rounded-full'>View Pricing</button>
                </div>
                <p className='text-white opacity-80 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;