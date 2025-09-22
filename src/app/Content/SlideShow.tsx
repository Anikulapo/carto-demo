
"use client";




import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
      id: 1,
      title: "WAN 2.2",
      subtitle: "WAN 2.2 Image generation",
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
      buttonText: "Try WAN 2.2",
      tag: "NEW IMAGE MODEL",
      image: "/images/slide1.jpg",
      bgClass: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
    },
    {
      id: 2,
      title: "FLUX.1 Krea",
      subtitle: "Open Source",
      description:
        "We're making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical report or generate with it in Krea Image.",
      buttonText: "Try FLUX.1",
      tag: "OPEN SOURCE MODEL",
      image: "/images/slide2.jpg",
      bgClass: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500",
    },
    {
      id: 3,
      title: "Enhanced AI",
      subtitle: "Next Generation",
      description:
        "Experience the future of AI-powered creativity with our latest enhanced models. Breakthrough performance in image generation and artistic expression.",
      buttonText: "Explore Now",
      tag: "ENHANCED MODEL",
      image: "/images/form.mp4",
      bgClass: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500",
    },
  ];


export default function SlideShow() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlides={false}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="pb-16"
      >
        {[1, 2, 3, 4].map((n) => (
          <SwiperSlide key={n}>
            <div className="h-64 rounded-2xl bg-gray-200 flex items-center justify-center text-2xl font-bold shadow-md">
              Slide {n}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls Section */}
      <div className="flex items-center justify-between mt-6">
        <div className="custom-pagination flex gap-2 justify-center grow"></div>
        <div className="flex gap-2">
          <button className="custom-prev px-4 py-2 bg-gray-800 text-white rounded-lg">
            Prev
          </button>
          <button className="custom-next px-4 py-2 bg-gray-800 text-white rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

