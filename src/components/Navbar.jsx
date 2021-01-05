import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import headspaceLogo from '../images/headspace-logo.jpg';
import DropdownMegamenu from './DropdownMegamenu';

const Navbar = (props) => {

    const [dropdown, setDropdown] = useState(true);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    }


    return (
        <nav className='flex justify-between items-center h-20 bg-white text-black relative shadow-sm px-2 md:px-18 2xl:px-64' role='navigation'>

            <div className='flex items-center'>

                <div className="px-4 cursor-pointer lg:hidden" onClick={props.toggle}>
                    <svg className='w-6 h-6' fill='currentColor' stroke='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" >
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='flex items-center'>
                    <a href="/"> <img className='h-10 w-10' src={headspaceLogo} alt="logo"/> </a>
                    <Link to='/' className='pl-1 text-2xl mb-1'> Headspace </Link>
                </div>
                

                <div >
                    <ul className="absolute ml-16 pr-8 lg:flex hidden text-gray-700">
                        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4" to='/'>Articles</Link>
                            {dropdown && <DropdownMegamenu />}
                        </li>
                        <li>
                            <Link className="p-4" to='/'>Meditation</Link>
                        </li>
                        <li>
                            <Link className="p-4" to='/'>Sleep</Link>
                        </li>
                        <li>
                            <Link className="p-4" to='/'>Stress</Link>
                        </li>
                    </ul>
                    
{/* 
                    <Link className="p-4" to='/'>Meditation</Link>
                    <Link className="p-4" to='/'>Sleep</Link>
                    <Link className="p-4" to='/'>Stress</Link>
                    <Link className="p-4" to='/'>Mindfulness</Link> */}
                </div>
            </div>


            <div className='flex items-center'>
                <div className="pr-8 md:block hidden text-gray-700">
                    <Link className="p-4" to='/'>About</Link>
                    <Link className="p-4" to='/menu'>Work</Link>
                    <Link className="p-4" to='/about'>Help</Link>
                    <Link className="p-4" to='/contact'>Login</Link>
                </div>

                <button className='hidden xl:block bg-blue-500 px-4 py-3 rounded-full text-white font-bold tracking-normal'>Try for free</button>
            </div>

            

        </nav>


    )
}

export default Navbar
