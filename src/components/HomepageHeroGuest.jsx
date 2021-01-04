import React from 'react'
import { Link } from 'react-router-dom'

const HomepageHeroGuest = () => {
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
                <div className='mt-8 text-gray-600 flex items-center'> 
                    <a href='www.google.it' className=' mr-2 flex items-center'>
                        <svg className='w-10 h-10 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        See how it works
                    </a>
                </div>

            </div>
        </div>
    )
}

export default HomepageHeroGuest
