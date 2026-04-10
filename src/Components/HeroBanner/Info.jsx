import React from 'react';

const Info = () => {
    return (
        <div className='mx-auto bg-linear-to-r from-[#4F39F6] via-[#801FF9] to-[#9514FA] manrope-font'>
    <div className='container mx-auto py-15 text-white grid grid-cols-3 items-center justify-center'>
    
    <div className='flex flex-col items-center justify-center gap-4 '>
        <h1 className='font-bold text-5xl'>50K+</h1>
        <p>Active Users</p>
    </div>                
    

    <div className='relative flex flex-col items-center justify-center gap-4'>
        

        <div className='absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white opacity-60'></div>
        
   
        <div className='absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white opacity-60'></div>

        <h1 className='font-bold text-5xl'>200+</h1>
        <p>Premium Tools</p>
    </div>                
    
    <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='font-bold text-5xl'>4.9</h1>
        <p>Rating</p>
    </div>                
    
    </div>
</div>
    );
};

export default Info;