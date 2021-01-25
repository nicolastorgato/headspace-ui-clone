import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import headspaceLogo from '../images/headspace_dot.png';
import Button from './Button';
import DropdownMegamenu from './DropdownMegamenu';
import useDarkMode from '../hook/useDarkMode.js';

import { useTranslation } from 'react-i18next';


const Navbar = (props) => {

    const [dropdown, setDropdown] = useState(false);

    const [colorTheme, setColorTheme] = useDarkMode();

    const { t } = useTranslation();


    const onMouseEnter = (e) => {
        if(window.innerWidth < 1250){
            setDropdown(false);
        } else {
            setDropdown(true);  
        }
    }

    const onMouseLeave = (e) => {
        if(window.innerWidth < 1250){
            setDropdown(false);
        } 
        else {     
            setDropdown(false);
        }
    }


    return (
        <nav className='flex justify-between items-center h-20 bg-white dark:bg-black text-black relative shadow-sm px-4 md:px-8 xl:px-18 2xl:px-24' role='navigation'>

            <div className='flex items-center'>

                <div className="pr-4 cursor-pointer lg:hidden" onClick={props.toggle}>
                    <svg className='w-6 h-6 fill-current text-black dark:text-white' fill='none' stroke='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='flex items-center'>
                    <a href="/"> <img className='h-8 w-8' src={headspaceLogo} alt="logo"/> </a>
                    <Link to='/' className='pl-2 text-2xl text-black dark:text-white mb-1'> Headspace </Link>
                    
                    <span onClick={ () => setColorTheme(colorTheme)} className='cursor-pointer ml-6'>
                        {colorTheme === 'light' ?
                            <svg className='h-8 w-8 fill-current text-black dark:text-white' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <title>Switch to Light Mode</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            :
                            <svg className='h-8 w-8 fill-current' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <title>Switch to Dark Mode</title>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        }

                    </span>
                        
                    

                    

                </div>
                

                <div >
                    <ul className=" ml-16 pr-8 lg:flex hidden text-gray-700 h-20">
                        <li id='articles' className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/articles' > {t('Navbar.Articles')} </a>
                            {dropdown && <DropdownMegamenu/>}
                        </li>
                        <li id='meditation' className='flex items-center'>
                            <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/meditation' > {t('Navbar.Meditation')} </a>     
                        </li>
                        <li className='flex items-center'>
                            <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/sleep'> {t('Navbar.Sleep')} </a>
                        </li>
                        <li className='flex items-center'>
                            <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/stress'> {t('Navbar.Stress')} </a>
                        </li>
                    </ul>
                    
                </div>
            </div>


            <div className='flex items-center'>
                <div className="pr-8 md:block hidden text-gray-700">
                    <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/about-us'> {t('Navbar.About')} </a>
                    <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/work'> {t('Navbar.Work')} </a>
                    <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://help.headspace.com/hc/en-us'> {t('Navbar.Help')} </a>
                    <a className="p-4 text-black dark:text-white hover:text-orange dark:hover:text-orange" href='https://www.headspace.com/login'> {t('Navbar.Login')} </a>
                </div>

                <Button href='https://www.headspace.com/subscriptions' text={t('Navbar.Button')} color='blue' hiddenOnSmallScreen='true' pX='4' pY='3' mX='0' mY='0' />
            </div>

            

        </nav>


    )
}

export default Navbar
