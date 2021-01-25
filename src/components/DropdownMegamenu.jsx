import React from 'react'
import {FiArrowRight} from 'react-icons/fi';

import { useTranslation } from 'react-i18next';

const DropdownMegamenu = () => {

    const { t } = useTranslation();

    return (
        <>
            <ul className='absolute w-full left-0 top-20 h-full z-10' >
                
                <div className='flex px-40 pb-8 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 border-t-2 border-b-4 rounded-b-3xl'>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white dark:bg-gray-900'>
                        <h1 className='my-2 py-2 px-4 text-5xl font-bold text-black dark:text-gray-200'> {t('Megamenu.1.Title')} </h1>
                        <h3 className='my-2 py-3 px-4 text-xl font-medium text-black dark:text-gray-300'> {t('Megamenu.1.Subtitle')} </h3>
                        <a href='www.headspace.com' className='my-2 py-3 px-4 text-md underline flex items-center text-black dark:text-gray-400 hover:text-orange dark:hover:text-gray-200'> {t('Megamenu.1.Link')} <FiArrowRight /> </a>
                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-2/4 bg-white dark:bg-gray-900 mr-16'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold text-black dark:text-gray-200'> {t('Megamenu.2.Title')} </h1>

                        <div className='px-4 mt-6 grid grid-cols-3 gap-x-5 gap-y-8 '>
                            { t('Megamenu.2.Cards', {returnObjects: true}).map( ({title, bgPath}) => {
                                return (
                                    <a key={title} className='' href='www.headspace.com'>
                                        <div className={`w-36 h-24 bg-cover rounded-xl bg-${bgPath}`}>    
                                        </div>
                                        <h1 className='mt-3 text-sm tracking-wider font-semibold text-black hover:text-orange dark:text-gray-400 dark:hover:text-gray-200'> {title} </h1>
                                    </a>
                                )
                            })}

                        </div>

                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white dark:bg-gray-900'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold text-black dark:text-gray-200'> {t('Megamenu.3.Title')} </h1>
                        <ul className='my-2 py-2 px-4 text-sm'>
                            { t('Megamenu.3.Links', {returnObjects: true}).map( (title) => {
                                return <li key={title} className='mb-3'> 
                                            <a className='underline font-semibold tracking-wider text-black dark:text-gray-400 dark:hover:text-gray-200 hover:text-orange' href="www.headspace.com"> {title} </a> 
                                        </li>
                            } )}
                        </ul>
                    </div>

                </div>

            </ul>
        </>
    )
}

export default DropdownMegamenu
