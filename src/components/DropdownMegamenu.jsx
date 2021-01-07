import React from 'react'
import {FiArrowRight} from 'react-icons/fi';
// import {Link} from 'react-router-dom';

const DropdownMegamenu = () => {


    return (
        <>
            <ul className='absolute w-full left-0 top-20 h-full z-10' >
                
                <div className='flex px-40 pb-8 bg-white border-gray-200 border-t-2 border-b-4 rounded-b-3xl'>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white'>
                        <h1 className='my-2 py-2 px-4 text-5xl font-bold'> Articles </h1>
                        <h3 className='my-2 py-3 px-4 text-xl font-medium'> Explore all articles <br/> on every topic</h3>
                        <a href='www.headspace.com' className='my-2 py-3 px-4 text-md underline flex items-center hover:text-orange'> View All <FiArrowRight /> </a>
                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-2/4 bg-white mr-16'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> Top Articles </h1>

                        <div className='px-4 grid grid-cols-3 gap-5'>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-1 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold '>How to be more empathetic</h1>
                            </a>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-2 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold'>How to be more grateful</h1>
                            </a>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-3 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold'>How to be more present</h1>
                            </a>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-4 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold'>What happens when <br/> we dislike someone</h1>
                            </a>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-5 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold'>How to relax</h1>
                            </a>
                            <a className='hover:text-orange' href='www.headspace.com'>
                                <div className='w-36 h-24 bg-menu-article-6 bg-cover rounded-xl'> </div>
                                <h1 className='mt-3 text-sm tracking-wider font-semibold'>How to be more happy</h1>
                            </a>
                        </div>

                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> Trending </h1>
                        <ul className='my-2 py-2 px-4 text-sm'>
                            <li className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> How to form a habit </a> </li>
                            <li className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> What is Mindfulness? </a> </li>
                            <li className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> How to calm down </a> </li>
                            <li className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> Mindful Eating </a> </li>
                            <li className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> How to improve self-esteem </a> </li>
                        </ul>
                    </div>

                </div>

            </ul>
        </>
    )
}

export default DropdownMegamenu
