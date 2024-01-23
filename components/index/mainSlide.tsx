'use client'
import React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import s1 from '@/public/slides/1.jpg'
import s2 from '@/public/slides/2.jpg'
import s3 from '@/public/slides/3.jpg'
import s4 from '@/public/slides/4.jpg'
import s5 from '@/public/slides/5.jpg'


const MainSlide = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: true })
    )
    return (
        <Carousel 
            className='' 
            plugins={[plugin.current]} 
            onMouseEnter={plugin.current.stop} 
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "center",
                loop: true
            }}
            >
            <CarouselContent className='ml-0 h-60 md:h-auto lg:h-96 xl:h-[500px]'>
                <CarouselItem className='pl-0'><Image src={s1} alt='slide-1' className='h-full sm:h-auto lg:h-full' /></CarouselItem>
                <CarouselItem className='pl-0'><Image src={s2} alt='slide-2' className='h-full sm:h-auto lg:h-full' /></CarouselItem>
                <CarouselItem className='pl-0'><Image src={s3} alt='slide-3' className='h-full sm:h-auto lg:h-full' /></CarouselItem>
                <CarouselItem className='pl-0'><Image src={s4} alt='slide-4' className='h-full sm:h-auto lg:h-full' /></CarouselItem>
                <CarouselItem className='pl-0'><Image src={s5} alt='slide-5' className='h-full sm:h-auto lg:h-full' /></CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

export default MainSlide