import React from 'react'
import Button from './Button'
import homepageHeroSVG from '../images/homepage-hero-guest/undraw_mindfulness_scgo.svg';

import { useTranslation } from 'react-i18next';


const HomepageHeroGuest = () => {

    const { t } = useTranslation();
    
    return (
        
        <div className='flex flex-col md:flex-row items-center mb-14 xl:mb-10 2xl:pb-12 2xl:pt-8 2xl:dark:bg-black mx-12 xl:mx-32 2xl:mx-64'>   
            <div className="w-full xl:w-1/2 py-8 sm:pt-20 2xl:py-20 flex flex-col justify-center items-start">
                <h1 className="2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-700 dark:text-gray-200 mb-8">
                    <p> {t('HeroGuest.Title')} </p>
                </h1>
                <p className='w-2/3 mb-8 xl:mb-12 font-medium text-xl xl:text-2xl text-gray-500 dark:text-gray-300'> {t('HeroGuest.Subtitle')} </p>
                <Button href='https://www.headspace.com/subscriptions' text={t('HeroGuest.Button')} color='blue' pX='5' pY='4' mX='0' mY='0'/>
                <div className='mt-8 text-gray-600 flex items-center'> 
                    <a href='https://www.headspace.com/' className=' mr-2 flex items-center'>
                        <svg className='w-10 h-10 mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <p className='text-gray-500 hover:text-orange'> {t('HeroGuest.Link')} </p> 
                    </a>
                </div>
            </div>
            <div className='w-full xl:w-1/2 px-6'>
                <img src={homepageHeroSVG} alt="Mindfulness" />
            </div>
        </div>
    )
}

export default HomepageHeroGuest
