import React from 'react'
import imageBG from '../images/hero-bg-1.png';

const MeditationForX = () => {
    return (
        <div className='mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-48'>
            <div className='py-10'>
                <h1 className='text-3xl xl:text-6xl font-bold text-gray-700 px-10' >Meditation and mindfulness for any mind, any mood, any goal</h1>
            </div>

            <div className='flex w-full'>
                <div className='w-1/2 p-10'>
                    <div className='grid grid-cols-2 gap-4 gap-y-16 '>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-400 text-4xl font-bold pb-6'>Meditation</h1>
                            <ul>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                            </ul>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-400 text-4xl font-bold pb-6'>Meditation</h1>
                            <ul>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                            </ul>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-400 text-4xl font-bold pb-6'>Meditation</h1>
                            <ul>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                            </ul>
                        </div>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-400 text-4xl font-bold pb-6'>Meditation</h1>
                            <ul>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                                <li className='text-gray-400 text-md font-semibold py-1 underline'>What is meditation</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-center'>
                    <img className='bg-blue-200' src={imageBG} alt=""/>
                </div>
            </div>

        </div>
       
    )
}

export default MeditationForX
