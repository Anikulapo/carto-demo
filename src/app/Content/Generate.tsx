"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const Generate = () => {
  const [showAll, setShowAll] = useState(false);

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
        img: "/images/mic.svg"
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
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white    ">Generate</h2>
        <button
          onClick={toggleShowAll}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
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
      <div className="grid grid-cols-4 gap-4">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-lg p-4  cursor-pointer border border-gray-200 hover:border-gray-300"
          >
            {/* Icon */}
            <div
              style={{
                background: `linear-gradient(to bottom, ${item.col}, ${item.col2})`,
              }}
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 text-white text-xl`}
            >
               <Image
                          src={item.img}
                          alt={item.title}
                          width={20}
                          height={20}
                          style={{
                            filter: "invert(1)" ,
                          }}
                        />
            </div>

            {/* Badge */}
            {item.badge && (
              <div
                className={`absolute top-3 right-3 ${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}
              >
                {item.badge}
              </div>
            )}

            {/* Content */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            {/* Open button */}
            <div className="mt-4 flex justify-end">
              <button className="text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors">
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
