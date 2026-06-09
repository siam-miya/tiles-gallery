"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import image_1 from "./../../public/banner-1.png";
import image_2 from "./../../public/banner-2.png";
import image_3 from "./../../public/banner-3.png";

export default function BannerSlider() {
    const slidesData = [
        {
            id: 1,
            heading: "Discover Your Perfect Aesthetic",
            image: image_1
        },
        {
            id: 2,
            heading: "Upgrade Your Space & Style",
            image: image_2
        },
        {
            id: 3,
            heading: "Explore Premium Collections",
            image: image_3
        }
    ];

    return (
        <div className="w-full h-[450px] md:h-[600px]"> 
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className="h-full"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image.src})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6 z-10">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight drop-shadow-md">
                                    {slide.heading}
                                </h1>    
                                <div>
                                    <Link href={"/all-tiles"}>
                                        <button className="bg-white text-black px-8 py-3.5 rounded-md font-semibold hover:bg-amber-400 transition duration-300 shadow-lg cursor-pointer">
                                            Browse Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}