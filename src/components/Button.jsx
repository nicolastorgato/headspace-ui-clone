import React from 'react'

const Button = ({href, text, color, hiddenOnSmallScreen, pX, pY, mX, mY}) => {
    
    return (
        <a href={href}>
            <button type="button" 
                    className={`transition duration-500 ease-in-out ${ hiddenOnSmallScreen ? 'hidden xl:block' : ''} bg-${color}-500 hover:bg-${color}-600 px-${pX} py-${pY} mx-${mX} my-${mY} rounded-full text-white font-bold tracking-normal transform hover:-translate-y-1 ` }>
                {text}
            </button>
        </a>

    )
}

export default Button
