import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/layouts/Header'
import HeaderTop from '@/components/layouts/HeaderTop'

export const metadata: Metadata = {
    title: "Thệ thống cửa hàng mẹ & bé toàn quốc",
    description: "Thệ thống cửa hàng mẹ & bé toàn quốc",
}

const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div>
                <HeaderTop />
                <Header />
            </div>
            {children}
        </>
    )
}

export default AuthLayout