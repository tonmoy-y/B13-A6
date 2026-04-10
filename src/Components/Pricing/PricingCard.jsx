import React from 'react';

const PricingCard = ({plan}) => {
    const {features, badge} = plan;
    console.log(badge);
    return (
        <div className={`bg-[#f2f2f2] container mx-auto manrope-font p-6 flex flex-col space-y-2 rounded-2xl relative ${plan.highlighted ? 'bg-primary text-white': ''}`}>
            {
                badge ? <div className='bg-[#FEF3C6] text-[#BB4D00] text-sm p-2  absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5'> <p>Most Popular</p></div> : ''
            }
          <h1 className='text-2xl font-bold'>{plan.name} </h1>
          <p className={`${plan.highlighted ? 'text-white': 'text-secondary'}`}>{plan.description} </p>
          <h3 ><span className='font-bold text-4xl'>${plan.price}</span>/<span className='text-xl'>{plan.billing}</span></h3>
           <ul className='text-secondary flex-1'>
        {features.map(feature => (
        <li key={feature} className={`font-medium ${plan.highlighted ? 'text-white': ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className={` size-4 me-2 inline-block text-success ${plan.highlighted ? 'text-white': ''}`}
 fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{feature}</span>
      </li>
        ))}
    </ul>
    <button  className={`btn font-bold py-4 rounded-full ${plan.highlighted ? 'bg-white text-primary': 'bg-primary text-white'}`}>{plan.buttonText}</button>
        </div>
    );
};

export default PricingCard;