import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-1 text-center items-center bg-white' : 'hidden'} >
            <div className='flex justify-around mb-3'>
                <div className='flex flex-col'>
                    <Link className="p-2" to='/'>Articles</Link>
                    <Link className="p-2" to='/menu'>Meditation</Link>
                    <Link className="p-2" to='/about'>Sleep</Link>
                    <Link className="p-2" to='/contact'>Stress</Link>
                    <Link className="p-2" to='/contact'>Mindfulness</Link>
                </div>

                <div className='flex flex-col'>
                    <Link className="p-2" to='/'>About</Link>
                    <Link className="p-2" to='/menu'>Work</Link>
                    <Link className="p-2" to='/about'>Help</Link>
                    <Link className="p-2" to='/contact'>Login</Link>
                </div>

            </div>
            
        </div>
    )
}

export default Dropdown
