// Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white" dir="rtl">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start text-center md:text-right">
          <div className="bg-cyan-900 text-cyan-300 text-sm px-4 py-2 rounded-full mb-6">
            به پلتفرم همزاد دیجیتال مالی خوش آمدید
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="text-cyan-400">داشبوردهای هوشمند</span> مالی خود را کشف کنید
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            به پنل کاربری خود خوش آمدید. از اینجا می‌توانید به تمامی ابزارهای مالی و تحلیلی دسترسی داشته باشید.
          </p>
          <p className="text-md text-gray-400 mb-8">
            همزاد دیجیتال مالی شما آماده است تا با تحلیل داده‌های مالی، بینش‌های ارزشمندی در اختیارتان قرار دهد. 
            از نوار کناری برای دسترسی به بخش‌های مختلف استفاده کنید.
          </p>
          <div className="bg-gray-700 p-4 rounded-lg mb-6 w-full">
            <h3 className="text-cyan-400 font-semibold mb-2">راهنمای شروع سریع:</h3>
            <ul className="text-right list-disc pr-4 text-gray-300">
              <li>برای مشاهده خلاصه وضعیت مالی به داشبورد اصلی مراجعه کنید</li>
              <li>در بخش تجزیه و تحلیل، گزارش‌های پیشرفته دریافت کنید</li>
              <li>با استفاده از پیش‌بینی‌ها، آینده مالی خود را شبیه‌سازی کنید</li>
            </ul>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="absolute -inset-4 bg-cyan-500 rounded-xl blur opacity-20"></div>
            <div className="relative bg-gray-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Mock Dashboard */}
              <div className="p-4 bg-gray-800 flex items-center justify-between">
                <div className="flex space-x-2 space-x-reverse">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm">پیش‌نمایش داشبورد مالی</div>
                <div className="w-6"></div>
              </div>
              
              <div className="p-4 grid grid-cols-12 gap-4">
                {/* Chart Placeholders */}
                <div className="col-span-8 bg-gray-600 rounded-lg p-4 h-40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="col-span-4 bg-gray-600 rounded-lg p-4 h-40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                
                {/* Stats Placeholders */}
                <div className="col-span-3 bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-xl font-bold">۲۵٪+</div>
                  <div className="text-gray-400 text-xs">سود سالیانه</div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-xl font-bold">۱۲</div>
                  <div className="text-gray-400 text-xs">دارایی فعال</div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-xl font-bold">۳.۲٪</div>
                  <div className="text-gray-400 text-xs">ریسک متوسط</div>
                </div>
                <div className="col-span-3 bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-cyan-400 text-xl font-bold">۹۴</div>
                  <div className="text-gray-400 text-xs">امتیاز سلامت</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;