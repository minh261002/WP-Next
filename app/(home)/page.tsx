import React from 'react'
import HomeCarousel from './components/Carousel'
import Brand from './components/Brand'

const HomePage = () => {
    return (
        <div className='space-y-4 mt-4 max-w-[1440px] mx-auto px-4 md:px-0'>
            <HomeCarousel />
            <Brand />
        </div>
    )
}

export default HomePage