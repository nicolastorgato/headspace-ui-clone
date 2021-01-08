import React from 'react'
import {FiArrowRight} from 'react-icons/fi';
// import {Link} from 'react-router-dom';

const DropdownMegamenu = ({data}) => {


    return (
        <>
            <ul className='absolute w-full left-0 top-20 h-full z-10' >
                
                <div className='flex px-40 pb-8 bg-white border-gray-200 border-t-2 border-b-4 rounded-b-3xl'>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white'>
                        <h1 className='my-2 py-2 px-4 text-5xl font-bold'> {data.mainTitleSection1} </h1>
                        <h3 className='my-2 py-3 px-4 text-xl font-medium'> {data.subTitleSection1}</h3>
                        <a href='www.headspace.com' className='my-2 py-3 px-4 text-md underline flex items-center hover:text-orange'> {data.subLinkSection1} <FiArrowRight /> </a>
                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-2/4 bg-white mr-16'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> {data.mainTitleSection2} </h1>

                        <div className='px-4 mt-6 grid grid-cols-3 gap-5'>
                            { data.titlesSection2.map( (title) => {
                                return (
                                    <a key={title.title} className='hover:text-orange' href='www.headspace.com'>
                                        <div className={`w-36 h-24 bg-cover rounded-xl bg-${title.bgPath}`}> </div>
                                        <h1 className='mt-3 text-sm tracking-wider font-semibold'> {title.title} </h1>
                                    </a>
                                )
                            })}
                        </div>

                    </div>
                    <div className='flex flex-col py-4 justify-start items-start w-1/4 bg-white'>
                        <h1 className='my-2 py-2 px-4 pt-6 text-2xl font-bold'> {data.mainTitleSection3} </h1>
                        <ul className='my-2 py-2 px-4 text-sm'>
                            {data.titlesSection3.map ( (title) => {
                                return <li key={title} className='mb-4 hover:text-orange'> <a className='underline font-semibold tracking-wider' href="www.headspace.com"> {title} </a> </li>
                            } )}
                        </ul>
                    </div>

                </div>

            </ul>
        </>
    )
}

export default DropdownMegamenu
