import React from 'react';
import Button from '../components/Button';
import image404 from '../images/404-image.png';


const NotFound = () => {
    return (
        <div className='flex flex-col md:flex-row items-center mb-14 xl:mb-10 2xl:pb-4 2xl:pt-8 2xl:dark:bg-black mx-12 xl:mx-32 2xl:mx-64'>   
            <div className="w-full xl:w-1/2 py-8 sm:pt-20 2xl:py-20 flex flex-col justify-center items-start">
                <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4">
                    <p> You’ve found a page that doesn’t exist </p>
                </h1>
                <p className='w-full mb-4 xl:mb-8 font-medium text-xl xl:text-2xl text-gray-500 dark:text-gray-300'> Breathe in, and on the out breath, go back and try again. </p>
                <p className='pr-36 mb-4 xl:mb-8 font-light text-sm xl:text-base text-gray-500 dark:text-gray-300'>
                    There are a lot of unknowns in the world right now. But one thing is certain — Headspace is here for you. To help support you through this time of crisis, we’re offering some free meditations you can listen to anytime.
                </p>
                <Button href='https://www.headspace.com/' text='Back to Home' color='blue' pX='4' pY='3' mX='0' mY='0'/>
            </div>
            <div className='w-full xl:w-1/2 px-6'>
                <img src={image404} alt="Mindfulness" />
            </div>
        </div>
    )
}

export default NotFound
