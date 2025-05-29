import * as React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const HomeCarousel = () => {
    const images = [
        'http://app-api.local/wp-content/uploads/2025/05/banner-home-1.png',
        'http://app-api.local/wp-content/uploads/2025/05/banner-home-2.png',
        'http://app-api.local/wp-content/uploads/2025/05/banner-home-3.png',
        'http://app-api.local/wp-content/uploads/2025/05/banner-home-4.png',
        'http://app-api.local/wp-content/uploads/2025/05/banner-home-5.png',
    ];
    return (
        <Carousel className="w-full max-w-[1440px] mx-auto relative px-4 md:px-0">
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <Image src={image} alt="banner" width={1440} height={100} className="w-full object-cover" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 rounded-md hidden md:block" />
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 rounded-md hidden md:block" />
        </Carousel>
    )
}


export default HomeCarousel