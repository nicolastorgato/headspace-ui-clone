import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-hero-bg1 bg-cover pb-64'>
            <div className=" py-32 flex flex-col justify-center items-start mx-96">

                <h1 className="lg:text-7xl md:text-4xl sm:text-3xl text-xl font-bold text-gray-700 mb-14">
                    Be kind to your mind, <br/> it will be fine
                </h1>
                <p className='mb-4 font-medium text-2xl text-gray-500'>Less stressed. More resilient. Happier. <br/> It all starts with just a few minutes a day.</p>
                <Link className='py-4 px-7 mt-6 bg-blue-500 rounded-full text-md font-semibold text-white hover:bg-blue-600'
                        to="/" >Start your journey
                </Link>
                <div className='mt-8'> 
                    
                    See how it works
                </div>

            </div>
        </div>
    )
}

export default Hero
