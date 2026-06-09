"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function BannerSlider() {
    const slidesData = [
        {
            id: 1,
            heading: "Discover Your Perfect Aesthetic",
            bgColor: "bg-blue-50"
        },
        {
            id: 2,
            heading: "Upgrade Your Space & Style",
            bgColor: "bg-gray-100"
        },
        {
            id: 3,
            heading: "Explore Premium Collections",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <div className="w-full h-[400px] md:h-[500px]">
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
                        <div className={`w-full h-full flex flex-col justify-center items-center text-center p-6 ${slide.bgColor}`}>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 max-w-2xl leading-tight">
                                {slide.heading}
                            </h1>
                            <div>
                                <Link href={"/all-tiles"}>
                                    <button className="bg-black text-white px-8 py-3.5 rounded-md font-medium hover:bg-amber-300 hover:text-black transition duration-300 shadow-md cursor-pointer">
                                        Browse Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}