import Image from 'next/image'
import React from 'react'
import AuthAlert from './AuthAlert'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { SearchIcon } from 'lucide-react'
import { Badge } from '../ui/badge'
import MobileMenu from './MobileMenu'
import { appImages } from '@/constants/appImages'

const Header = () => {
    return (
        <>
            <div className='w-full bg-[#fff4fc] hidden md:block py-2'>
                <div className='w-full max-w-[1440px] mx-auto'>
                    <div className="grid grid-cols-4">
                        <div className='flex items-center gap-2'>
                            <span className='text-sm font-medium'>Mua hàng và CSKH:</span>
                            <span className='text-sm font-bold text-pink-500'>1800 6099</span>
                            <Image src={appImages.freeCall} alt='icon-phone' width={100} height={100} className='w-10' />
                        </div>

                        <div className='flex items-center gap-2'>
                            <Image src={appImages.store} alt='icon-phone' width={100} height={100} className='w-5' />
                            <span className='text-sm font-medium'>Tìm siêu thị</span>
                            <span className='text-sm font-bold text-pink-500'>(19)</span>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Image src={appImages.sieuToc} alt='icon-phone' width={100} height={100} className='w-5' />
                            <span className='text-sm font-medium'>Nhập địa chỉ để mua hàng giao <strong>Siêu Tốc 1h</strong></span>
                        </div>

                        <div className='flex items-center gap-2 justify-end'>
                            <AuthAlert title='Tài khoản' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-white border-b border-gray-200 shadow-sm py-3 px-4 md:px-0'>
                <div className='w-full max-w-[1440px] mx-auto'>
                    <div className="grid grid-cols-5 items-center">
                        <div className='col-span-2 md:col-span-1 flex items-center gap-2'>
                            <Image src={appImages.logo} alt='logo' width={150} height={100} className='w-2/3 md:w-1/2' />
                        </div>

                        <div className='col-span-3 items-center gap-2 relative hidden md:flex'>
                            <Input className='w-full h-11' placeholder='Tìm kiếm sản phẩm' />
                            <Button variant={"default"} className='absolute right-0 top-0 h-full w-10'>
                                <SearchIcon className='w-4 h-4' />
                            </Button>
                        </div>

                        <div className="col-span-1 items-center justify-end gap-6 hidden md:flex">
                            <div className='flex flex-col items-center gap-1 relative'>
                                <Image src={appImages.cartTop} alt='cart' width={35} height={20} />
                                <span className='text-xs font-medium'>Giỏ hàng</span>
                                <Badge variant={"default"} className='absolute -top-2 -right-2 rounded-full'>
                                    <span className='text-xs font-medium'>1</span>
                                </Badge>
                            </div>

                            <div className='flex flex-col items-center gap-1 relative'>
                                <Image src={appImages.notifyTop} alt='cart' width={35} height={20} />
                                <span className='text-xs font-medium'>Thông báo</span>
                                <Badge variant={"default"} className='absolute -top-2 -right-0 rounded-full'>
                                    <span className='text-xs font-medium'>1</span>
                                </Badge>
                            </div>
                        </div>

                        <div className='col-span-3 flex items-center justify-end gap-6 md:hidden'>
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header