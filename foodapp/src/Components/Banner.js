import React from 'react'
import '../App.css'
const Banner = () => {
    return (
        <div className='section-container bg-gradient-to-r from-indigo-500 from-0% to-100%'>
            <div className='py-24 flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>Left</div>
                <div className='md:w-1/2'>Right</div>
            </div>
        </div>
    )
}

export default Banner