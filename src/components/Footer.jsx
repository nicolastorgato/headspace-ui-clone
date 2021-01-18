import React from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
// import {TiWorld} from 'react-icons/ti/';

const Footer = () => {

    const options = [
        { value: 'english', label: 'English' },
        { value: 'italiano', label: 'Italiano' },
        { value: 'espanol', label: 'Espanol' }
        ];

    return (
        <div className='flex justify-between items-center h-24 bg-gray-600 dark:bg-gray-900 text-gray-300 font-medium text-xs px-10 xl:px-16 2xl:px-64'>

            <div className='items-baseline flex-wrap md:flex hidden'>
                <p className='p-4'>© 2021 Headspace Inc.</p>
                <Link className="p-4" to='/'>Terms</Link>
                <Link className="p-4" to='/'>Privacy Policy</Link>
                <Link className="p-4" to='/'>Cookie policy</Link>
                <Link className="p-4" to='/'>CCPA notice</Link>
                <Link className="p-4" to='/'>Securety</Link>
                <Link className="p-4" to='/'>Sitemap</Link>
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

            {/* <button className='text-white px-4 py-2 rounded-full border-white border-2 text-base font-medium flex items-center'>
                 <TiWorld className='mr-2 mt-1' /> Language 
            </button> */}

            <Select className=' w-44' menuPlacement='top' options={options} />


        </div>
    )
}

export default Footer
