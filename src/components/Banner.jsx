import React from 'react';

import { useTranslation } from 'react-i18next';

const Banner = () => {

    const { t } = useTranslation();

    return (
        <div className='flex justify-center items-center bg-banner-bg bg-cover bg-bottom h-14'>

            <a href='https://www.headspace.com/netflix' className='text-white dark:text-black text-base' rel="noreferrer" target="_blank"> {t('Banner.Title')} </a>
        </div>
    )
}

export default Banner
