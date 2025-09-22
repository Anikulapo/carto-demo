"use client";

import React, { useState } from 'react';
import { ChevronDown, Settings, LogOut, Moon, Bell } from 'lucide-react';

export default function User() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* User Profile Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-3 p-2 rounded-lg  transition-colors duration-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500"
      >
        {/* Profile Picture */}
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            
          </div>
          
        </div>
        
        {/* Username */}
        <span className="text-white font-medium">benevolentnimblebat</span>
        
        {/* Dropdown Arrow */}
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          {/* User Info Header */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                
              </div>
              <div>
                <p className="font-semibold text-gray-900">benevolentnimblebat</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          {/* <div className="py-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
              <User className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Profile</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Settings</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
              <Bell className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Notifications</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors">
              <Moon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Dark Mode</span>
            </button>
            
            <hr className="my-2 border-gray-100" />
            
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600">
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div> */}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}