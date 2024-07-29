import React from 'react';


function Stats() {
    return ( 
        <div className='Container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className='fs-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/images/Ecosystem.png' alt='Ecosystem' style={{width:"85%"}} />
                    <div className='text-center'>
                        <a href='/product' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href='https://zerodha-clone-1-s4k2.onrender.com/' style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;