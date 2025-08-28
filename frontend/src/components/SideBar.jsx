import React, { useState } from 'react';

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [forecastMonths, setForecastMonths] = useState(12);
  const [riskLevel, setRiskLevel] = useState('medium');
  const [includeScenario, setIncludeScenario] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleForecastChange = (e) => {
    setForecastMonths(parseInt(e.target.value));
  };

  const handleRiskChange = (e) => {
    setRiskLevel(e.target.value);
  };

  const handleScenarioToggle = () => {
    setIncludeScenario(!includeScenario);
  };

  const applySettings = () => {
    // This function would typically update the dashboard with new settings
    alert(`تنظیمات اعمال شد: پیش‌بینی برای ${forecastMonths} ماه با سطح ریسک ${riskLevel}`);
  };

  return (
    <>
      {/* Main container that holds both sidebar and content */}
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 text-white shadow-lg transition-all duration-300 ${
            isOpen ? 'w-full md:w-64' : 'w-0 md:w-0'
          }`}
          dir="rtl"
        >
          <div className={`overflow-y-auto h-full pb-20 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="p-5">
              <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b border-gray-700 pb-2">تنظیمات پیش‌بینی</h2>
              
              {/* Forecast Period */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">مدت زمان پیش‌بینی (ماه)</label>
                <div className="flex items-center mt-1">
                  <input
                    type="range"
                    min="3"
                    max="36"
                    value={forecastMonths}
                    onChange={handleForecastChange}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="mr-3 text-cyan-400 font-bold">{forecastMonths}</span>
                </div>
              </div>
              
              {/* Risk Level */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">سطح ریسک</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setRiskLevel('low')}
                    className={`py-2 rounded-lg text-sm ${
                      riskLevel === 'low' ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    کم
                  </button>
                  <button
                    onClick={() => setRiskLevel('medium')}
                    className={`py-2 rounded-lg text-sm ${
                      riskLevel === 'medium' ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    متوسط
                  </button>
                  <button
                    onClick={() => setRiskLevel('high')}
                    className={`py-2 rounded-lg text-sm ${
                      riskLevel === 'high' ? 'bg-red-700 text-white' : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    زیاد
                  </button>
                </div>
              </div>
              
              {/* Scenario Analysis */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={includeScenario}
                      onChange={handleScenarioToggle}
                    />
                    <div className={`block w-10 h-6 rounded-full ${includeScenario ? 'bg-cyan-600' : 'bg-gray-600'}`}></div>
                    <div
                      className={`dot absolute top-1 bg-white w-4 h-4 rounded-full transition ${
                        includeScenario ? 'left-5' : 'left-1'
                      }`}
                    ></div>
                  </div>
                  <div className="mr-3 text-sm">شامل تحلیل سناریو</div>
                </label>
              </div>
              
              {/* Additional Options */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">نوع پیش‌بینی</label>
                <select className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block p-2">
                  <option value="linear">خطی</option>
                  <option value="exponential">نمایی</option>
                  <option value="seasonal">فصلی</option>
                </select>
              </div>
              
              {/* Apply Button */}
              <button
                onClick={applySettings}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                اعمال تنظیمات
              </button>
              
              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-sm font-bold mb-3 text-gray-400">دسترسی سریع</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#dashboard" className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      داشبورد اصلی
                    </a>
                  </li>
                  <li>
                    <a href="#reports" className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      گزارش‌های ذخیره شده
                    </a>
                  </li>
                  <li>
                    <a href="#history" className="flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      پیش‌بینی‌های قبلی
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="fixed md:relative bottom-4 right-4 md:bottom-auto md:right-auto md:self-start z-10 bg-cyan-600 text-white p-3 rounded-full shadow-lg mt-4 mr-4"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>

          {/* Dashboard Content */}
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-bold mb-6">داشبورد مالی شما</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder for dashboard content */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">خلاصه وضعیت مالی</h3>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">پیش‌بینی درآمد</h3>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">تجزیه و تحلیل ریسک</h3>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">گزارش‌های ماهانه</h3>
                <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;