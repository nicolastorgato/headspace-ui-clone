import React from 'react'
// import { Link } from 'react-router-dom'
import Button from './Button'

const HomepageHeroGuest = () => {
    return (
        <div className=' xl:mb-20 2xl:bg-hero-bg1 2xl:bg-cover pb-16 2xl:pb-80'>
            <div className="py-4 2xl:py-20 flex flex-col justify-center items-start mx-20 xl:mx-48 2xl:mx-96">

                <h1 className="lg:text-7xl md:text-5xl sm:text-4xl text-3xl font-bold text-gray-700 mb-14">
                    Be kind to your mind, <br/> it will be fine
                </h1>
                <p className='mb-8 font-medium text-xl xl:text-2xl text-gray-500'>Less stressed. More resilient. Happier. <br/> It all starts with just a few minutes a day.</p>
                <Button text='Start your journey' color='blue' hiddenOnSmallScreen='false' pX='5' pY='4' mX='0' mY='0'/>
                <div className='mt-8 text-gray-600 flex items-center'> 
                    <a href='www.google.it ' className=' mr-2 flex items-center'>
                        <svg className='w-10 h-10 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <p className='hover:text-orange'>See how it works </p> 
                    </a>
                </div>

            </div>
        </div>
    )
}

export default HomepageHeroGuest
