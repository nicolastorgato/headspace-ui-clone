import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import headspaceLogo from '../images/headspace-logo.jpg';
import DropdownMegamenu from './DropdownMegamenu';


const Navbar = (props) => {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 1250){
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 1250){
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    }


    return (
        <nav className='flex justify-between items-center h-20 bg-white text-black relative shadow-sm px-4 md:px-8 xl:px-18 2xl:px-24' role='navigation'>

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
                    <ul className=" ml-16 pr-8 lg:flex hidden text-gray-700 h-20">
                        <li className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4 hover:text-orange" to='/'>Articles</Link>
                            {dropdown && <DropdownMegamenu />}
                        </li>
                        <li className='flex items-center'>
                            <Link className="p-4 hover:text-orange" to='/'>Meditation</Link>
                        </li>
                        <li className='flex items-center'>
                            <Link className="p-4 hover:text-orange" to='/'>Sleep</Link>
                        </li>
                        <li className='flex items-center'>
                            <Link className="p-4 hover:text-orange" to='/'>Stress</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>


            <div className='flex items-center'>
                <div className="pr-8 md:block hidden text-gray-700">
                    <Link className="p-4 hover:text-orange" to='/'>About</Link>
                    <Link className="p-4 hover:text-orange" to='/menu'>Work</Link>
                    <Link className="p-4 hover:text-orange" to='/about'>Help</Link>
                    <Link className="p-4 hover:text-orange" to='/contact'>Login</Link>
                </div>

                <button className='hidden xl:block bg-blue-500 px-4 py-3 rounded-full text-white font-bold tracking-normal'>Try for free</button>
            </div>

            

        </nav>


    )
}

export default Navbar
