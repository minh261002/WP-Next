import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import AuthAlert from "./AuthAlert"

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <MenuIcon className="w-10 h-10" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="border-b border-gray-200">
                    <SheetTitle>Moon Studio Xin chào</SheetTitle>
                </SheetHeader>

                <div className="px-4">
                    <AuthAlert title='Tài khoản khách hàng' />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu