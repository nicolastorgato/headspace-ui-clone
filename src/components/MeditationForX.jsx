import React, {useState} from 'react'
import {FiArrowRight} from 'react-icons/fi';

const MeditationForX = () => {

    const [imageBG, setImageBG] = useState('meditationForX_BASIC');


    const onMouseEnter = (e) => {
        setImageBG(e.target.id);
    }

    const onMouseLeave = () => {
        setImageBG('meditationForX_BASIC');
    }

    return (
        <div className='py-10 mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-80'>
            <div className='pt-12 xl:pt-0 py-2 xl:py-10'>
                <h1 className='text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 dark:text-gray-200' >Meditation and mindfulness for any mind, any mood, any goal </h1>
            </div>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full xl:w-1/2 py-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-16'>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'>Meditation</h1>
                            <ul>
                                <li id='meditationForX_1' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">What is meditation</a>  
                                </li>
                                <li id='meditationForX_2' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Meditation for beginners</a>  
                                </li>
                                <li id='meditationForX_3' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Benefits of meditation</a>  
                                </li>
                                <li id='meditationForX_4' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Guided meditation</a>  
                                </li>
                                <li id='meditationForX_5' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Meditation techniques</a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> See more </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'>Sleep</h1>
                            <ul>
                                <li id='meditationForX_6' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to sleep better</a>  
                                </li>
                                <li id='meditationForX_7' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Meditation for sleep</a>  
                                </li>
                                <li id='meditationForX_8' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to fall back asleep</a>  
                                </li>
                                <li id='meditationForX_9' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to wake up</a>  
                                </li>
                                <li id='meditationForX_10' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Sleep hacks</a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> See more </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'>Stress</h1>
                            <ul>
                                <li id='meditationForX_1' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Meditation for anxiety</a>  
                                </li>
                                <li id='meditationForX_2' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to relieve stress</a>  
                                </li>
                                <li id='meditationForX_3' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">Meditation for stress</a>  
                                </li>
                                <li id='meditationForX_4' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to relax</a>  
                                </li>
                                <li id='meditationForX_5' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to reduce anxiety</a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> See more </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'>Mindfulness</h1>
                            <ul>
                                <li id='meditationForX_6' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to stop worrying</a>  
                                </li>
                                <li id='meditationForX_7' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to form a habit</a>  
                                </li>
                                <li id='meditationForX_8' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to be more grateful</a>  
                                </li> 
                                <li id='meditationForX_9' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to be more present</a>  
                                </li>
                                <li id='meditationForX_10' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation">How to improve self-esteem</a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> See more </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
                <div className='w-1/2 pt-10 pb-16 px-16 hidden xl:block'>
                    <div className={`bg-${imageBG} bg-cover h-full rounded-2xl`}>
                        
                    </div>
                </div>
            </div>

        </div>
       
    )
}

export default MeditationForX
