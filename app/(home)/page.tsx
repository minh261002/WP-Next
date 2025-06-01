import React from 'react'
import HomeCarousel from './components/Carousel'
import Brand from './components/Brand'
import Category from './components/Category'

const HomePage = () => {
    return (
        <div className='space-y-4 mt-4 max-w-[1440px] mx-auto px-4 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch'>
                {/* <HomeCarousel /> */}
                <div className="col-span-1 hidden md:block">
                    <Category />
                </div>

                <div className="col-span-5 md:col-span-4">
                    <HomeCarousel />
                </div>
            </div>
            <Brand />
        </div>
    )
}

export default HomePage