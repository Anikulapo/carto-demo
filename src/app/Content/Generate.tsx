"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

const Generate = () => {
  const [showAll, setShowAll] = useState(false);
  const theme = useSelector((state:RootState)=> state.theme.mode)

  const generateItems = [
    {
      id: 1,
      title: "Image",
      subtitle: "Generate images with custom styles in Flux and Ideogram.",
      badge: "New",
      badgeColor: "bg-blue-500",
      icon: "🖼️",
      iconBg: "bg-gray-600",
      col: "#4a6276",
      col2: "#bacad9",
      img: "/images/gallery.svg",
    },
    {
      id: 2,
      title: "Video",
      subtitle: "Generate videos with Hailu, Pika, Runway, Luma, and more.",
      badge: null,
      icon: "📹",
      iconBg: "bg-orange-500",
      col: "#f2ae16",
      col2: "#f2ae16",
      img: "/images/video-svgrepo-com.svg",
    },
    {
      id: 3,
      title: "Realtime",
      subtitle: "Realtime AI rendering on a canvas. Instant feedback loops.",
      badge: null,
      icon: "⚡",
      iconBg: "bg-blue-400",
      col: "#71ab56",
      col2: "#71ab59",
      img: "/images/write-pencil-compose-document-sheet-svgrepo-com.svg",
    },
    {
      id: 4,
      title: "Enhancer",
      subtitle: "Upscale and enhance images and videos up to 22k.",
      badge: "New",
      badgeColor: "bg-blue-500",
      icon: "✨",
      iconBg: "bg-gray-700",
      col: "#71ab56",
      col2: "#71ab59",
      img: "/images/magicpen.svg",
    },
    {
      id: 5,
      title: "Edit",
      subtitle: "Add objects, change style, or expand photos and generations.",
      badge: "New",
      badgeColor: "bg-blue-500",
      icon: "✏️",
      iconBg: "bg-purple-600",
      col: "#3e2062",
      col2: "#977fba",
      img: "/images/compass-svgrepo-com.svg",
    },
    {
      id: 6,
      title: "Video Lipsync",
      subtitle: "Lip sync any video to any audio.",
      badge: "New",
      badgeColor: "bg-blue-500",
      icon: "🎤",
      iconBg: "bg-green-600",
      col: "#284e42",
      col2: "#98b394",
      img: "/images/mic.svg",
    },
    {
      id: 7,
      title: "Motion Transfer",
      subtitle: "Transfer motion to images and animate characters.",
      badge: "New",
      badgeColor: "bg-blue-500",
      icon: "🕺",
      iconBg: "bg-gray-800",
      col: "#71ab56",
      col2: "#71ab59",
      img: "/images/person.svg",
    },
    {
      id: 8,
      title: "Train",
      subtitle: "Teach Krea to replicate your style, products, or characters.",
      badge: null,
      icon: "🧠",
      iconBg: "bg-pink-500",
      col: "#71ab56",
      col2: "#71ab59",
      img: "/images/train.svg",
    },
  ];

  const displayedItems = showAll ? generateItems : generateItems.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Generate
        </h2>
        <button
          onClick={toggleShowAll}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
        >
          {showAll ? (
            <>
              Show less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show all
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl p-3 sm:p-4 bg-[#111] md:bg-transparent flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            {/* Icon */}
            <div
              style={{
                background: `linear-gradient(to bottom, ${item.col}, ${item.col2})`,
              }}
              className="w-12 h-12 md:w-15 md:h-15 rounded-xl flex items-center justify-center shrink-0"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={24}
                height={24}
                style={{ filter: "invert(1)" }}
                className="md:w-8 md:h-8"
              />
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <h3 className={`font-semibold ${theme == "light" ? "text-black":"text-white" } text-base sm:text-lg flex items-center gap-2`}>
                {item.title}
                {item.badge && (
                  <div
                    className={`${item.badgeColor} text-white text-[10px] sm:text-xs px-2 py-[2px] rounded-full font-medium`}
                  >
                    {item.badge}
                  </div>
                )}
              </h3>
              <p className="text-xs  text-gray-400 leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            {/* Open button */}
            <div className="mt-3 sm:mt-0 sm:ml-auto hidden md:flex justify-end ">
              <button className="bg-gray-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-black  font-medium text-xs sm:text-sm transition-colors">
                Open
              </button>
            </div>

            <div className="mt-3 sm:mt-0 sm:ml-auto flex justify-end w-full md:hidden">
              <button className="bg-gray-200 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-black  font-medium text-xs sm:text-sm transition-colors">
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generate;
