import React from 'react'
import { Link } from 'react-router-dom'

const LatestArticles = () => {
    return (
        <div className='pb-64'>
            <div className=" py-32 flex flex-col justify-center items-start mx-96">

                <h1 className="self-end lg:text-7xl md:text-4xl sm:text-3xl text-xl font-bold text-gray-700 mb-14">
                    Latest Articles
                </h1>
                
                {/* grid start- latest articles */}
                <div class="w-full grid grid-cols-4 gap-4">

                    <a className='col-span-2' href="https://www.headspace.com/articles/election-anxiety">
                        <div class=" bg-yellow-400 h-56 rounded-xl">
                            <div class="h-full flex flex-col justify-between items-start">
                                <div class="bg-blue-700 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    Mindfulness
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-2/3'>
                                    <p class="pb-2 text-base text-gray-700">
                                        Election anxiety
                                    </p>
                                    <svg className='h-6 bg-blue-700 rounded-full px-1 py-1 ' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                                
                            
                            </div>
                        </div>
                    </a>

                    <div class="bg-yellow-400 h-56">2</div>
                    <div class="bg-yellow-400 h-56">3</div>
                    <div class="bg-yellow-400 h-56">4</div>
                    <div class="bg-yellow-400 h-56">5</div>
                    <div class="col-span-2 bg-yellow-400 h-56">6</div>
                </div>
                {/* end grid */}


                <Link className=' self-center py-4 px-7 mt-6 bg-blue-500 rounded-full text-md font-semibold text-white hover:bg-blue-600'
                        to="/" >View all articles
                </Link>


                {/* <div className='flex-1 max-w-4xl mx-auto p-10'>
                    <ul className='grid grid-cols-3'>
                        <li className=' bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>
                        <li className='bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>
                        <li className='bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>
                        <li className='bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>
                        <li className='bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>
                        <li className='bg-red-400 rounded-md shadow-xl'> <div className='h-24'></div> </li>

                    </ul>

                </div> */}


            </div>
        </div>
    )
}

export default LatestArticles
