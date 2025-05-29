import Image from 'next/image'
import React from 'react'

const HeaderTop = () => {
    return (
        <div className='w-full bg-[#9bdbf8]'>
            <div className='w-full max-w-[1440px] mx-auto'>
                <Image src={"/banner-top.png"} alt='banner-top' width={1440} height={100} className='w-full md:h-12 object-contain' />
            </div>
        </div>
    )
}

export default HeaderTop