import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex justify-between items-center h-24 bg-gray-800 text-gray-300 font-medium text-xs px-64'>

            <div className='flex items-baseline '>
                <p className='p-4'>© 2021 Headspace Inc.</p>
                <Link className="p-4" to='/'>Articles</Link>
                <Link className="p-4" to='/'>Meditation</Link>
                <Link className="p-4" to='/'>Sleep</Link>
                <Link className="p-4" to='/'>Stress</Link>
                <Link className="p-4" to='/'>Mindfulness</Link>
            </div>

            <div className='flex items-center'>
                <span className='p-4 mr-4 bg-white rounded-full'></span>
                <span className='p-4 mr-4 bg-white rounded-full'></span>
                <span className='p-4 mr-4 bg-white rounded-full'></span>
                <span className='p-4 mr-4 bg-white rounded-full'></span>
                <span className='p-4 mr-4 bg-white rounded-full'></span>
            </div>

            <button className='text-white px-4 py-2 rounded-full border-white border-2 text-base font-medium'>Language</button>

        </div>
    )
}

export default Footer
