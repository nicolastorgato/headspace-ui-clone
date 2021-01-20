import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
// import {TiWorld} from 'react-icons/ti/';

const Footer = () => {

    const { t, i18n } = useTranslation();

    function handleChange(event){
        i18n.changeLanguage(event.target.value);
    }



    return (
        <div className='flex justify-between items-center h-24 bg-gray-600 dark:bg-gray-900 text-gray-300 font-medium text-xs px-10 xl:px-16 2xl:px-64'>

            <div className='items-baseline flex-wrap md:flex hidden'>
                <p className='p-4'>{t('Footer.List.Headspace')}</p>
                <Link className="p-4" to='/'>{t('Footer.List.Terms')}</Link>
                <Link className="p-4" to='/'>{t('Footer.List.PrivacyPolicy')}</Link>
                <Link className="p-4" to='/'>{t('Footer.List.CookiePolicy')}</Link>
                <Link className="p-4" to='/'>{t('Footer.List.CCPANotice')}</Link>
                <Link className="p-4" to='/'>{t('Footer.List.Securety')}</Link>
                <Link className="p-4" to='/'>{t('Footer.List.Sitemap')}</Link>
            </div>



            <div className='flex items-center'>
                <a className='p-2 mr-4 text-gray-600 bg-white rounded-full' href="https://www.facebook.com/Headspace">
                    <FaFacebookF /> 
                </a>
                <a className='p-2 mr-4 text-gray-600 bg-white rounded-full' href="https://www.instagram.com/headspace/">
                    <FaInstagram />
                </a>
                <a className='p-2 mr-4 text-gray-600 bg-white rounded-full' href="https://www.linkedin.com/company/headspace-meditation-limited/">
                    <FaLinkedinIn />
                </a>
                <a className='p-2 mr-4 text-gray-600 bg-white rounded-full' href="https://twitter.com/Headspace">
                    <FaTwitter />
                </a>
                <a className='p-2 mr-4 text-gray-600 bg-white rounded-full' href="https://www.youtube.com/user/Getsomeheadspace">
                    <FaYoutube />
                </a>
                
            </div>


                <select onChange={handleChange}
                    className="outline-none appearance-none py-2 px-3 text-white bg-gray-600 border-white border-2 text-base rounded-full">
                    <option value='en' > 
                        {t('Footer.SelectLanguage.en')} 
                    </option>
                    <option value='it' >
                        {t('Footer.SelectLanguage.it')} 
                    </option>
                </select>

        </div>
    )
}

export default Footer
