import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-pink-500 font-bold p-2'>
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Grow with data.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Fast, flexible financing for
                    </p>
                    <TypeAnimation
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            ' B2B.',
                            1500, // wait 1s before replacing "Mice" with "Hamsters"
                            ' SAAS.',
                            1500,
                            ' BTC.',
                            1500,
                        ]}
                        wrapper="span"
                        speed={10}
                        style={{ fontSize: '', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for B2B, BTC, & SAAS platforms.</p>
                <button className='bg-pink-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;





