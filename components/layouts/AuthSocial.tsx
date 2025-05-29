import React from 'react'
import { Button } from '../ui/button'
import { ChromeIcon, FacebookIcon } from 'lucide-react'

const AuthSocial = () => {
    return (
        <div className='space-y-4'>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Hoặc tiếp tục với</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="cursor-pointer bg-red-500 text-white hover:bg-red-500/90 hover:text-white">
                    <ChromeIcon className="h-4 w-4 mr-2" />
                    Google
                </Button>
                <Button variant="outline" className="cursor-pointer bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:text-white">
                    <FacebookIcon className="h-4 w-4 mr-2" />
                    Facebook
                </Button>
            </div>
        </div>

    )
}

export default AuthSocial