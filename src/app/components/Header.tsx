"use client";

import NavBar from "./NavBar";
import { Sun, Menu, X, Moon } from "lucide-react";
import { RootState } from "@/store/store";
import Image from "next/image";
import User from "./User";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/slices/themeSlice";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleTheme());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuApps = [
    {
      title: "Image",
      icon: "/images/gallery.svg",
      color: "bg-blue-100",
    },
    {
      title: "Video",
      icon: "/images/video-svgrepo-com.svg",
      color: "bg-orange-400",
    },
    {
      title: "Realtime",
      icon: "/images/magicpen.svg",
      color: "bg-cyan-400",
    },
    {
      title: "Enhancer",
      icon: "/images/write-pencil-compose-document-sheet-svgrepo-com.svg",
      color: "bg-gray-500",
    },
    {
      title: "Video Lipsync",
      icon: "/images/compass-svgrepo-com.svg",
      color: "bg-green-600",
    },
  ];

  return (
    <>
      <header className={`fixed z-40 flex w-full items-center justify-between p-2 sm:p-4   ${theme == "light" ? "bg-white":"bg-black"}`}>
        {/* Left side - User (always visible) */}
        <div className="flex items-center">
          <User />
        </div>

        {/* Center - NavBar (hidden on mobile, visible on larger screens) */}
        <div className="hidden lg:block">
          <NavBar />
        </div>

        {/* Right side - Action buttons */}
        <nav className="flex gap-1 sm:gap-2 items-center">
          {/* Gallery buttons - hidden on mobile, show only one on tablet */}
          <button className="hidden md:flex bg-[#f8f8f8] rounded-xl p-2 gap-1 text-[10px] sm:text-[12px] text-[#4a4a4a] cursor-pointer items-center">
            <Image
              src="/images/gallery-favorite.svg"
              alt="gallery"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
            <span className="hidden lg:inline">Gallery</span>
          </button>

          <button className="hidden xl:flex bg-[#f8f8f8] rounded-xl p-2 gap-1 text-[10px] sm:text-[12px] text-[#4a4a4a] cursor-pointer items-center">
            <Image
              src="/images/gallery-favorite.svg"
              alt="gallery"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
            <span className="hidden lg:inline">Gallery</span>
          </button>

          {/* Notification button */}
          <button className="bg-[#f8f8f8] rounded-xl p-2 flex items-center cursor-pointer text-[#4a4a4a]">
            <Image
              src="/images/notification.svg"
              alt="Notification"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </button>

          {/* Theme toggle */}
          <button
            onClick={handleClick}
            className="bg-[#f8f8f8] rounded-xl p-2 flex items-center cursor-pointer text-[#4a4a4a]"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-[#4a4a4a]" />
            ) : (
              <Sun className="w-5 h-5  text-[#4a4a4a]" />
            )}
          </button>

          {/* Profile avatar */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-purple-400 cursor-pointer to-pink-400 flex items-center justify-center"></div>

          {/* Mobile menu button - only visible on mobile when NavBar is hidden */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden bg-[#f8f8f8] rounded-xl p-2 flex items-center cursor-pointer text-[#4a4a4a]"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay - matches the style from your image */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/80 z-45"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Sidebar */}
        </>
      )}
      <div
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-80 bg-neutral-900 z-50 overflow-y-auto transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Home Section */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Image
                src="/images/home-filled-svgrepo-com.svg"
                alt="Home"
                width={24}
                height={24}
              />
            </div>
            <span className="text-white text-lg font-medium">Home</span>
          </div>
        </div>

        {/* Account Section */}
        <div className="px-4 py-2">
          <h3 className="text-white text-lg font-semibold mb-4">Account</h3>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-white text-base">Log in</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-white text-base">Settings</span>
            </div>
            <button className="bg-neutral-700 hover:bg-neutral-600 transition-colors px-4 py-2 rounded-full text-white text-sm">
              Open
            </button>
          </div>
        </div>

        {/* Apps Section */}
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">Apps</h3>
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 14l5-5 5 5z" />
            </svg>
          </div>

          <div className="space-y-4">
            {mobileMenuApps.map((app, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center`}
                  >
                    <Image
                      src={app.icon}
                      alt={app.title}
                      width={24}
                      height={24}
                      style={{
                        filter:
                          app.color === "bg-blue-100"
                            ? "none"
                            : "brightness(0) invert(1)",
                      }}
                    />
                  </div>
                  <span className="text-white text-base">{app.title}</span>
                </div>
                <button className="bg-neutral-700 hover:bg-neutral-600 transition-colors px-4 py-2 rounded-full text-white text-sm">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
