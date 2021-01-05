import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const DropdownMegamenu = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={handleClick} 
                className={click 
                    ? 'absolute top-8 hidden' 
                    : 'absolute top-20 bg-white h-60 w-1/2 border-gray-200 border-opacity-80 border-2 rounded-b-2xl'}
                >
                
                <div className='flex'>
                    <div className='flex flex-col justify-start items-start w-1/3 bg-white'>
                        <h1 className='my-2 py-2 px-4 text-5xl font-bold'> Articles </h1>
                        <h3 className='my-2 py-2 px-4 text-xl font-medium'> Explore all articles on every topic</h3>
                        <p className='my-2 py-2 px-4 text-md underline'> View All</p>
                    </div>
                    <div className='flex flex-col justify-start items-start w-1/3 bg-white'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> Top Articles </h1>
                        <div className='px-4 py-5 flex flex-wrap'>
                            <div className='w-20 h-14 mb-4 mr-4 bg-yellow-600 rounded-md'>1</div>
                            <div className='w-20 h-14 mb-4 mr-4 bg-yellow-600 rounded-md'>1</div>
                            <div className='w-20 h-14 mb-4 mr-4 bg-yellow-600 rounded-md'>1</div>
                            <div className='w-20 h-14 mb-4 mr-4 bg-yellow-600 rounded-md'>1</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start items-start w-1/3 bg-white'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> Trending </h1>
                        <ul className='my-2 py-2 px-4 text-sm'>
                            <li className='mb-3'> Article 1 </li>
                            <li className='mb-3'> Article 1 </li>
                            <li className='mb-3'> Article 1 </li>
                            <li className='mb-3'> Article 1 </li>
                        </ul>
                    </div>

                </div>

            </ul>
        </>
    )
}

export default DropdownMegamenu
