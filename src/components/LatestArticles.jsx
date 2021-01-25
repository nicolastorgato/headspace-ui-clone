import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

import { useTranslation } from 'react-i18next';

const LatestArticles = () => {

    const { t } = useTranslation();

    return (
        <div className='bg-white dark:bg-black'>
            <div className="py-16 2xl:py-20 2xl:pb-28 flex flex-col justify-center items-start mx-8 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-80">

                <h1 className="self-end text-3xl xl:text-5xl 2xl:text-6xl font-bold text-gray-700 dark:text-gray-200 mb-8 xl:mb-14">
                    {t('LatestArticles.Title')}
                </h1>
                
                {/* grid start- latest articles */}
                <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-4">

                    <a className='col-span-2 transition duration-500 ease-in-out transform hover:scale-102' href="https://www.headspace.com/articles/election-anxiety">
                        <div className="bg-election-anxiety bg-cover bg-top h-56 rounded-xl">
                            <div className="h-full flex flex-col justify-between items-start">
                                <div className="bg-blue-700 text-xs text-white px-2 py-1 mt-2 ml-2 rounded-md">
                                    {t('LatestArticles.Cards.1.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.1.Title')}
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
                                    {t('LatestArticles.Cards.2.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.2.Title')}
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
                                    {t('LatestArticles.Cards.3.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.3.Title')}
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
                                    {t('LatestArticles.Cards.4.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.4.Title')}
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
                                    {t('LatestArticles.Cards.5.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.5.Title')}
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
                                    {t('LatestArticles.Cards.6.Tag')}
                                </div>
                                <div className='bg-gray-100 px-3 py-2 ml-3 mb-3 rounded-xl w-3/4'>
                                    <p className="pb-2 text-base text-gray-700">
                                        {t('LatestArticles.Cards.6.Title')}
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

                <div className='w-full flex justify-center'>
                    <Button href='https://www.headspace.com/articles' text={t('LatestArticles.Button')} color='blue' hiddenOnSmallScreen='false' pX='7' pY='4' mX='0' mY='12'/>

                </div>

            </div>
        </div>
    )
}

export default LatestArticles
