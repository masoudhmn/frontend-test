// Header.jsx
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Site Title */}
        <div className="text-xl font-bold">
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            همزاد دیجیتال مالی
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-cyan-400 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute md:static top-16 left-0 right-0 bg-gray-900 md:bg-transparent flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 p-4 md:p-0 md:space-x-6 md:space-x-reverse`}>
          <a href="#dashboard" className="hover:text-cyan-400 transition-colors duration-300">داشبورد اصلی</a>
          <a href="#analysis" className="hover:text-cyan-400 transition-colors duration-300">تجزیه و تحلیل</a>
          <a href="#reports" className="hover:text-cyan-400 transition-colors duration-300">گزارش‌ها</a>
          <a href="#forecasts" className="hover:text-cyan-400 transition-colors duration-300">پیش‌بینی‌ها</a>
        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4 space-x-reverse">
          {/* <button className="hidden md:block text-gray-300 hover:text-cyan-400 transition-colors duration-300">
            راهنما
          </button> */}
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">
              کاربر
            </div>
            {/* <span className="text-sm mx-2">مهمان</span> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;