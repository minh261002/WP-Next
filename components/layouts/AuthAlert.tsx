"use client"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import AuthLogin from "./AuthLogin"
import AuthRegister from "./AuthRegister"

const AuthAlert = (
    {
        title = "Tài khoản"
    }: {
        title: string
    }
) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image src={"/customer-login.png"} alt='logo' width={100} height={100} className='w-5' />
                    <span className='text-sm font-medium'>
                        {title}
                    </span>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        <span className="text-2xl font-bold">Moon Studio xin chào</span>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm">
                        Vui lòng đăng nhập hoặc đăng ký để tiếp tục sử dụng đầy đủ dịch vụ của chúng tôi.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <Tabs defaultValue="login">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login" className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Đăng nhập
                        </TabsTrigger>
                        <TabsTrigger value="register" className="cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Đăng ký
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <AuthLogin />
                    </TabsContent>
                    <TabsContent value="register">
                        <AuthRegister />
                    </TabsContent>
                </Tabs>
                <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">Huỷ</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default AuthAlert