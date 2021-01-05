import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const DropdownMegamenu = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={handleClick} className={click ? 'absolute top-8 hidden' : 'absolute top-8 bg-gray-200 w-72 h-28'}>
                <li className='block w-full '>
                    <Link className='dropdown-link' to='/' onClick={ () => {
                        setClick(false);
                    }}> Title </Link>
                </li>
                <li className='block w-full'>
                    <Link className='dropdown-link' to='/' onClick={ () => {
                        setClick(false);
                    }}> Title </Link>
                </li>
            </ul>
        </>
    )
}

export default DropdownMegamenu
