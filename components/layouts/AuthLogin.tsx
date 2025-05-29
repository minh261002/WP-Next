"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Login } from "@/types/auth";
import { useState } from "react";
import AuthSocial from "./AuthSocial";

const AuthLogin = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<Login>()

    const onLoginSubmit = (data: Login) => {
        console.log(data)
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>
                    Đăng nhập hệ thống
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onLoginSubmit)}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Tên đăng nhập</Label>
                        <Input {...register("username", { required: 'Tên đăng nhập không được để trống' })} />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <div className="relative">
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                {...register("password", { required: 'Mật khẩu không được để trống' })} />
                            <Button
                                type="button"
                                variant="link"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                            </Button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>

                    <Button type="submit" className="w-full cursor-pointer">Đăng nhập</Button>

                    <AuthSocial />
                </CardContent>
            </form>
        </Card>
    )
}

export default AuthLogin