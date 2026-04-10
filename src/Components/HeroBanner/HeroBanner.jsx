import React from 'react';
import Banner from '../../assets/banner.png';
import PlayImg from '../../assets/Play.png';
import Dot from  '../../assets/dot.png';

const HeroBanner = () => {
    return (
        <div className='container mx-auto my-20 manrope-font'>
            <div className='flex flex-col lg:flex-row mx-auto justify-around gap-6'>
                <div className=' space-y-2.5 flex flex-col items-start justify-center'>
                    <div className='bg-[#E1E7FF] flex items-center gap-1 px-4 py-2 rounded-full'> <img src={Dot} alt="" className='h-4 w-4'/> <p className='text-primary font-medium'> New: AI-Powered Tools Available </p></div>
                    <h1 className='font-bold text-6xl/normal '>
                        Supercharge Your <br /> Digital Workflow
                    </h1>
                    <p className='text-secondary text-lg/normal'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products

                    </p>
                    <div className='flex gap-4'>
                        <button className='btn btn-primary rounded-full'>Explore Products</button>
                        <button className='btn btn-ghost border-2 border-primary rounded-full text-primary flex items-center' > <img src={PlayImg} alt="" /> Watch Demo </button>
                    </div>
                </div>
                <div>
                    <img src={Banner} alt="" />
                </div>

            </div>
        </div>
    );
};

export default HeroBanner;