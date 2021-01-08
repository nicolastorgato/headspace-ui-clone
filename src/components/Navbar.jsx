import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import headspaceLogo from '../images/headspace-logo.jpg';
import Button from './Button';
import DropdownMegamenu from './DropdownMegamenu';
import {megamenuData} from '../data/dropdownMegamenu.js';


const Navbar = (props) => {

    const [dropdown, setDropdown] = useState(false);


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
                        <li id='articles' className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4 hover:text-orange" to='/' >Articles</Link>
                            {dropdown && <DropdownMegamenu data={megamenuData.articles}/>}
                        </li>
                        {/* <li id='meditation' className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4 hover:text-orange" to='/' >Meditation </Link>
                            {dropdown && <DropdownMegamenu data={megamenuData.meditation}/>}
                        </li>
                        <li className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4 hover:text-orange" to='/'>Sleep</Link>
                            {dropdown && <DropdownMegamenu data={megamenuData.sleep}/>}
                        </li>
                        <li className='flex items-center' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link className="p-4 hover:text-orange" to='/'>Stress</Link>
                            {dropdown && <DropdownMegamenu data={megamenuData.stress}/>}
                        </li> */}
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

                <Button text='Try for free' color='blue' hiddenOnSmallScreen='true' pX='4' pY='3' mX='0' mY='0' />
            </div>

            

        </nav>


    )
}

export default Navbar
