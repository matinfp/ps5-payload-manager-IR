import React from 'react'

export default function LogoIcon({ className = "w-6 h-6" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="iranFlagBar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      {/* Sidebar Line with Iranian Flag Gradient */}
      <rect x="2" y="4" width="2.5" height="16" rx="1" fill="url(#iranFlagBar)" />
      
      {/* Payload Grid - Iranian Tricolor: Green / White / Red */}
      <rect x="7.5" y="6.5" width="4" height="3.5" rx="1" fill="#22c55e" />
      <rect x="13" y="6.5" width="4" height="3.5" rx="1" fill="#22c55e" />
      <rect x="18.5" y="6.5" width="4" height="3.5" rx="1" fill="#22c55e" />
      
      <rect x="7.5" y="11" width="4" height="3" rx="0.8" fill="#ffffff" />
      <rect x="13" y="11" width="4" height="3" rx="0.8" fill="#ffffff" />
      <rect x="18.5" y="11" width="4" height="3" rx="0.8" fill="#ffffff" />

      <rect x="7.5" y="15" width="4" height="3.5" rx="1" fill="#ef4444" />
      <rect x="13" y="15" width="4" height="3.5" rx="1" fill="#ef4444" />
      <rect x="18.5" y="15" width="4" height="3.5" rx="1" fill="#ef4444" />
    </svg>
  )
}
