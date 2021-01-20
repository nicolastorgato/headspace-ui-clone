import React from 'react';
import {Link} from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const DropdownMenu = ({isOpen, toggle}) => {

    const { t } = useTranslation();

    return (
        <div className={isOpen ? 'grid grid-rows-1 text-center items-center bg-white' : 'hidden'} >
            <div className='flex justify-around mb-3'>
                <div className='flex flex-col'>
                    <Link className="p-2" to='/'>{t('Navbar.Articles')}</Link>
                    <Link className="p-2" to='/menu'>{t('Navbar.Meditation')}</Link>
                    <Link className="p-2" to='/about'>{t('Navbar.Sleep')}</Link>
                    <Link className="p-2" to='/contact'>{t('Navbar.Stress')}</Link>
                </div>

                <div className='flex flex-col'>
                    <Link className="p-2" to='/'>{t('Navbar.About')}</Link>
                    <Link className="p-2" to='/menu'>{t('Navbar.Work')}</Link>
                    <Link className="p-2" to='/about'>{t('Navbar.Help')}</Link>
                    <Link className="p-2" to='/contact'>{t('Navbar.Login')}</Link>
                </div>

            </div>
            
        </div>
    )
}

export default DropdownMenu
