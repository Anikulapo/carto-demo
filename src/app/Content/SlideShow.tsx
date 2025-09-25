"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
    title: "Enhanced AI",
    subtitle: "Next Generation",
    description:
      "Experience the future of AI-powered creativity with our latest enhanced models. Breakthrough performance in image generation and artistic expression.",
    buttonText: "Explore Now",
    tag: "ENHANCED MODEL",
    image: "/images/open.mp4",
    bgClass: "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500",
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

  {
    id: 4,
    title: "FLUX.1 Krea",
    subtitle: "Open Source",
    description:
      "We're making the weights to our FLUX.1 Krea model open source. Download and run our model weights, read the technical report or generate with it in Krea Image.",
    buttonText: "Try FLUX.1",
    tag: "OPEN SOURCE MODEL",
    image: "/images/slide2.jpg",
    bgClass: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500",
  },
];

export default function SlideShow() {
  return (
    <div className="w-full max-w-[2000px] px-[5%] mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.3}
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative min-h-[550px] rounded-2xl overflow-hidden text-white flex items-center ${slide.bgClass}`}
            >
              {/* Background Layer */}
              {slide.image.endsWith(".mp4") ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/30" />{" "}
              {/* dark overlay */}
              {/* Content */}
              <div className="relative z-10 max-w-xl px-10">
                <span className="inline-block mb-3 text-xs font-semibold tracking-wide uppercase bg-white/20 px-3 py-1 rounded-full">
                  {slide.tag}
                </span>
                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg font-medium mb-3">{slide.subtitle}</p>
                <p className="mb-5 text-gray-200">{slide.description}</p>
                <button className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-md hover:bg-gray-200 transition hover:scale-115 duration-700 cursor-pointer">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls Section */}
      <div className="flex items-center justify-between mt-6">
        <div className="custom-pagination flex gap-2 justify-center grow"></div>
        <div className="flex gap-2">
          <button className="custom-prev px-2 py-2 bg-[#f8f8f8]  rounded-full">
            <ChevronLeft className="text-black"/>
          </button>
          <button className="custom-next px-2 py-2 bg-[#f8f8f8]  rounded-full">
            <ChevronRight className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
