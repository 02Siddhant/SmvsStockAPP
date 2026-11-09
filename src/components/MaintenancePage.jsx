import React from 'react';
import smvsLogo from '../assets/1.png';

export default function MaintenancePage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] flex flex-col items-center justify-center p-4 relative overflow-hidden font-report-gujarati">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main card */}
      <div className="relative z-10 max-w-lg w-full bg-[#1e1e1e] border border-amber-500/30 rounded-2xl shadow-2xl p-8 text-center flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 p-3 bg-[#2a2a2a] rounded-2xl border border-gray-700/60 shadow-inner">
          <img
            src={smvsLogo}
            alt="SMVS Logo"
            className="h-20 w-auto object-contain drop-shadow"
          />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          સિસ્ટમ મેન્ટેનન્સ / Maintenance Mode
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          સિસ્ટમ હાલ મેન્ટેનન્સ હેઠળ છે
        </h1>
        <h2 className="text-sm sm:text-base font-medium text-amber-400/90 mb-5">
          System is Temporarily Under Maintenance
        </h2>

        {/* Description */}
        <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed bg-[#161616] p-4 rounded-xl border border-gray-800 text-left w-full mb-6">
          <p className="flex items-start gap-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>
              ડેટાબેઝ અપગ્રેડ અને સિસ્ટમ મેન્ટેનન્સ કાર્ય ચાલુ હોવાથી વેબસાઇટ હાલ પૂરતી બંધ રાખવામાં આવી છે.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-amber-500 font-bold">•</span>
            <span>
              આ સમય દરમિયાન કોઈ પણ પ્રકારની એન્ટ્રી (Orders, Purchases, Dispatches) થઈ શકશે નહીં.
            </span>
          </p>
          <p className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
            <span className="text-amber-500 font-bold">•</span>
            <span>
              કામ પૂર્ણ થયા બાદ સિસ્ટમ આપોઆપ પૂર્વવત શરૂ થઈ જશે. અસુવિધા બદલ દિલગીર છીએ.
            </span>
          </p>
        </div>

        {/* Progress Spinner */}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
          <svg
            className="animate-spin h-4 w-4 text-amber-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span>મેન્ટેનન્સ અને બેકઅપ પ્રક્રિયા ચાલુ છે...</span>
        </div>

        {/* Action Button */}
        <button
          onClick={handleReload}
          className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-xl shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          પેજ રિફ્રેશ કરો (Reload Page)
        </button>
      </div>

      {/* Footer note */}
      <p className="mt-8 text-xs text-gray-500 text-center relative z-10">
        SMVS Swaminarayan Mandir — Stock & Inventory Management Portal
      </p>
    </div>
  );
}
