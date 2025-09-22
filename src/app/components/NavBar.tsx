"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [active, setActive] = useState("Home");

  const buttons = [
    {
      title: "Home",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
      img: "/images/home-filled-svgrepo-com.svg",
    },
    {
      title: "Images",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21,15 16,10 5,21" />
        </svg>
      ),
      img: "/images/gallery.svg",
    },
    {
      title: "Video",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      img: "/images/video-svgrepo-com.svg",
    },
    {
      title: "Magic Pen",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ),
      img: "/images/magicpen.svg",
    },
    {
      title: "Edit",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      img: "/images/write-pencil-compose-document-sheet-svgrepo-com.svg",
    },
    {
      title: "Compass",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <polyline points="4,7 4,4 20,4 20,7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
      img: "/images/compass-svgrepo-com.svg",
    },
    {
      title: "Folder",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      ),
      img: "/images/folder.svg",
    },
  ];

  return (
    <nav className="flex gap-1 p-2 dar bg-neutral-800 rounded-3xl shadow-lg">
      {buttons.map((btn) => (
        <button
          key={btn.title}
          title={btn.title}
          onClick={() => setActive(btn.title)}
          className={`w-13 cursor-pointer h-10 flex items-center justify-center rounded-2xl transition-colors duration-150 ${
            active === btn.title
              ? "bg-white text-black"
              : "text-white hover:bg-neutral-700"
          }`}
        >
          <Image
            src={btn.img}
            alt={btn.title}
            width={20}
            height={20}
            style={{
              filter: active !== btn.title ? "invert(1)" : "none",
            }}
          />
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
