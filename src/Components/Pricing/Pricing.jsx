import React, { use } from 'react';
import PricingCard from './PricingCard';



const Pricing = ({pricingPromise}) => {
    const pricing = use(pricingPromise);
    return (
        <div className='container mx-auto manrope-font py-30'>
            <div className='space-y-4'>
                <h1 className='text-5xl text-center font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-secondary text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>

            {
                pricing.map(plan => (
                    <PricingCard key={plan.id} plan={plan} />
                ))
            }
            </div>
        </div>
    );
};

export default Pricing;