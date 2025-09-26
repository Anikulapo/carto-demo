"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Settings, LogOut, Moon, Bell, User as UserIcon, Shield, HelpCircle } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';


export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const theme = useSelector((state:RootState) => state.theme.mode);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      icon: <UserIcon className="w-4 h-4" />,
      title: "Profile Settings",
      subtitle: "Manage your account"
    },
    {
      icon: <Bell className="w-4 h-4" />,
      title: "Notifications",
      subtitle: "Manage notifications"
    },
    {
      icon: <Moon className="w-4 h-4" />,
      title: "Appearance",
      subtitle: "Dark mode & themes"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Privacy & Security",
      subtitle: "Account security"
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 p-1 sm:p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500/50 hover:bg-white/5"
      >
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 flex items-center justify-center shadow-lg ring-2 ring-white/10">
            <span className="text-white font-semibold text-xs sm:text-sm">
              B
            </span>
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-black"></div>
        </div>
        
        {/* Username - responsive visibility */}
        <span className={`hidden sm:inline ${theme == "light" ? "text-black":"text-white" } font-medium text-xs sm:text-sm md:text-base truncate max-w-[100px] md:max-w-[150px]`}>
          benevolentnimblebat
        </span>
        
        {/* Dropdown Arrow */}
        <ChevronDown 
          className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-all duration-200 ${
            isOpen ? 'rotate-180 text-gray-200' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-neutral-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-neutral-700/50 z-50 overflow-hidden">
          {/* User Info Header */}
          <div className="p-4 sm:p-5 border-b border-neutral-700/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">
                  B
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-white text-sm sm:text-base truncate">
                  benevolentnimblebat
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-xs sm:text-sm text-green-400 font-medium">Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 px-4 sm:px-5 py-3 text-left hover:bg-neutral-800/50 transition-colors duration-150 group"
              >
                <div className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-150">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white text-sm font-medium group-hover:text-gray-100">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-xs group-hover:text-gray-300">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-700/50 my-1"></div>

          {/* Settings & Help */}
          <div className="py-1">
            <button className="w-full flex items-center space-x-3 px-4 sm:px-5 py-3 text-left hover:bg-neutral-800/50 transition-colors duration-150 group">
              <Settings className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-150" />
              <div>
                <p className="text-white text-sm font-medium group-hover:text-gray-100">Settings</p>
              </div>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 sm:px-5 py-3 text-left hover:bg-neutral-800/50 transition-colors duration-150 group">
              <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-150" />
              <div>
                <p className="text-white text-sm font-medium group-hover:text-gray-100">Help & Support</p>
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-700/50 my-1"></div>

          {/* Sign Out */}
          <div className="py-1">
            <button className="w-full flex items-center space-x-3 px-4 sm:px-5 py-3 text-left hover:bg-red-500/10 transition-colors duration-150 group">
              <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-150" />
              <div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-red-400">Sign Out</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}