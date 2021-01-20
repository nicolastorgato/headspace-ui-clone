import React, {useState} from 'react'
import {FiArrowRight} from 'react-icons/fi';

import { useTranslation } from 'react-i18next';

const MeditationForX = () => {

    const [imageBG, setImageBG] = useState('meditationForX_BASIC');

    const { t } = useTranslation();


    const onMouseEnter = (e) => {
        setImageBG(e.target.id);
    }

    const onMouseLeave = () => {
        setImageBG('meditationForX_BASIC');
    }

    return (
        <div className='py-10 mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-80'>
            <div className='pt-12 xl:pt-0 py-2 xl:py-10'>
                <h1 className='text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 dark:text-gray-200' > {t('MeditationForX.Title')} </h1>
            </div>

            <div className='flex flex-col md:flex-row w-full'>
                <div className='w-full xl:w-1/2 py-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-16'>
                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'>{t('MeditationForX.Lists.1.Title')}</h1>
                            <ul>
                                <li id='meditationForX_1' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.1.Links.1')} </a>  
                                </li>
                                <li id='meditationForX_2' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.1.Links.2')} </a>  
                                </li>
                                <li id='meditationForX_3' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.1.Links.3')} </a>  
                                </li>
                                <li id='meditationForX_4' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.1.Links.4')} </a>  
                                </li>
                                <li id='meditationForX_5' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.1.Links.5')} </a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '>  {t('MeditationForX.Lists.1.SeeMore')}  </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'> {t('MeditationForX.Lists.2.Title')} </h1>
                            <ul>
                                <li id='meditationForX_6' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.2.Links.1')} </a>  
                                </li>
                                <li id='meditationForX_7' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.2.Links.2')} </a>  
                                </li>
                                <li id='meditationForX_8' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.2.Links.3')} </a>  
                                </li>
                                <li id='meditationForX_9' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.2.Links.4')} </a>  
                                </li>
                                <li id='meditationForX_10' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.2.Links.5')} </a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> {t('MeditationForX.Lists.2.SeeMore')} </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'> {t('MeditationForX.Lists.3.Title')} </h1>
                            <ul>
                                <li id='meditationForX_1' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.3.Links.1')} </a>  
                                </li>
                                <li id='meditationForX_2' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.3.Links.2')} </a>  
                                </li>
                                <li id='meditationForX_3' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.3.Links.3')} </a>  
                                </li>
                                <li id='meditationForX_4' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.3.Links.4')} </a>  
                                </li>
                                <li id='meditationForX_5' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.3.Links.5')} </a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> {t('MeditationForX.Lists.3.SeeMore')} </p> 
                                <FiArrowRight className='text-gray-600 dark:text-gray-300' /> 
                            </a>
                        </div>

                        <div className='col-span-1 flex flex-col'>
                            <h1 className='text-gray-500 dark:text-gray-300 text-3xl xl:text-4xl font-bold pb-6'> {t('MeditationForX.Lists.4.Title')} </h1>
                            <ul>
                                <li id='meditationForX_6' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.4.Links.1')} </a>  
                                </li>
                                <li id='meditationForX_7' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.4.Links.2')} </a>  
                                </li>
                                <li id='meditationForX_8' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.4.Links.3')} </a>  
                                </li> 
                                <li id='meditationForX_9' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.4.Links.4')} </a>  
                                </li>
                                <li id='meditationForX_10' className='py-1' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                                    <a className='text-gray-700 dark:text-gray-300 text-md font-semibold underline opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' 
                                       href="https://www.headspace.com/meditation-101/what-is-meditation"> {t('MeditationForX.Lists.4.Links.5')} </a>  
                                </li>
                                
                            </ul>
                            <a className='flex items-center opacity-50 hover:opacity-100 transition-opacity duration-1000 ease-out' href="https://www.headspace.com/meditation">
                                <p className='text-gray-700 dark:text-gray-300 text-lg font-semibold py-1 underline '> {t('MeditationForX.Lists.4.SeeMore')} </p> 
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
