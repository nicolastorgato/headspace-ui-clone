import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const LatestArticles = () => {
    return (
        <div className='bg-white dark:bg-black'>
            <div className="py-16 2xl:py-20 2xl:pb-28 flex flex-col justify-center items-start mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-80">

                <h1 className="self-end text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 dark:text-gray-200 mb-8 xl:mb-14">
                    Latest Articles
                </h1>
                
                {/* grid start- latest articles */}
                <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-4">

                    <a className='col-span-2 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-election-anxiety bg-cover bg-top h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-blue-700 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Mindfulness
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        Election anxiety
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            </div>
                        </div>
                    </a>


                    <a className='col-span-2 xl:col-span-1 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-walking-meditation bg-cover h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-yellow-500 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Meditation
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        Walking meditation
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>


                    <a className='col-span-2 xl:col-span-1 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-always-tired bg-cover bg-top h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className=" bg-purple-500 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Sleep
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        Why am I always tired?
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>


                    <a className='col-span-2 xl:col-span-1 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-home-office bg-cover bg-center h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-green-500 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Work
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        How to create a mindful office
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>


                    <a className='col-span-2 xl:col-span-1 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-mindful-eating bg-cover bg-center h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-blue-700 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Mindfulness
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        What is mindful eating?
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>


                    <a className='col-span-2 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-power-napping bg-cover bg-bottom h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-purple-500 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Sleep
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        Power napping 101
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>



                    
                </div>
                {/* end grid */}


                <Link to='/' className='self-center'>
                    <Button text='View all articles' color='blue' hiddenOnSmallScreen='false' pX='7' pY='4' mX='0' mY='12'/>
                </Link>


            </div>
        </div>
    )
}

export default LatestArticles
