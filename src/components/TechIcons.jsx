import React from 'react';

export function BrandLogoGG({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ggBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-primary, #00e5ff)" />
          <stop offset="55%" stopColor="var(--accent-tertiary, #ffaa00)" />
          <stop offset="100%" stopColor="var(--accent-secondary, #ff6b00)" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="116" height="116" rx="28" fill="var(--bg-card, #121214)" stroke="url(#ggBorder)" strokeWidth="6" />
      <path
        d="M58 43H38C31.3726 43 26 48.3726 26 55V73C26 79.6274 31.3726 85 38 85H52C57.5228 85 62 80.5228 62 75V63H45"
        stroke="var(--accent-primary, #00e5ff)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100 43H80C73.3726 43 68 48.3726 68 55V73C68 79.6274 73.3726 85 80 85H94C99.5228 85 104 80.5228 104 75V63H87"
        stroke="var(--accent-secondary, #ff6b00)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PythonLogo({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M54.3 6C38.4 6 39.4 12.9 39.4 12.9L39.4 20.1H54.6V22.5H32.9C32.9 22.5 22 21.3 22 38.4C22 55.5 31.5 54.9 31.5 54.9H37.2V46.7C37.2 46.7 36.9 37.2 46.5 37.2H62.7C62.7 37.2 71.7 37.3 71.7 28.5V14.4C71.7 14.4 73.1 6 54.3 6ZM45.4 11.1C47.1 11.1 48.4 12.4 48.4 14.1C48.4 15.8 47.1 17.1 45.4 17.1C43.7 17.1 42.4 15.8 42.4 14.1C42.4 12.4 43.7 11.1 45.4 11.1Z"
        fill="#387EB8"
      />
      <path
        d="M55.7 104C71.6 104 70.6 97.1 70.6 97.1L70.6 89.9H55.4V87.5H77.1C77.1 87.5 88 88.7 88 71.6C88 54.5 78.5 55.1 78.5 55.1H72.8V63.3C72.8 63.3 73.1 72.8 63.5 72.8H47.3C47.3 72.8 38.3 72.7 38.3 81.5V95.6C38.3 95.6 36.9 104 55.7 104ZM64.6 98.9C62.9 98.9 61.6 97.6 61.6 95.9C61.6 94.2 62.9 92.9 64.6 92.9C66.3 92.9 67.6 94.2 67.6 95.9C67.6 97.6 66.3 98.9 64.6 98.9Z"
        fill="#FFE052"
      />
    </svg>
  );
}

export function AiBrainLogo({ className = 'w-5 h-5', color = '#ffaa00' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M12 4.5C10.5 2.8 7.5 2.8 6 4.5C4.5 6.2 4.8 8.5 3.5 10C2.2 11.5 2.2 14 3.8 15.5C4.5 17.8 6.8 19.5 9.5 19.5H12V4.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4.5C13.5 2.8 16.5 2.8 18 4.5C19.5 6.2 19.2 8.5 20.5 10C21.8 11.5 21.8 14 20.2 15.5C19.5 17.8 17.2 19.5 14.5 19.5H12V4.5Z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="9.5" r="1.2" fill={color} />
      <circle cx="15.5" cy="9.5" r="1.2" fill={color} />
      <circle cx="8.5" cy="14.5" r="1.2" fill={color} />
      <circle cx="15.5" cy="14.5" r="1.2" fill={color} />
      <path d="M8.5 9.5L12 12L15.5 9.5M8.5 14.5L12 12L15.5 14.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function SqlDatabaseLogo({ className = 'w-5 h-5', color = '#ff6b00' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke={color} strokeWidth="1.9" />
      <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke={color} strokeWidth="1.9" />
      <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke={color} strokeWidth="1.9" />
      <circle cx="8" cy="10" r="1" fill={color} />
      <circle cx="8" cy="17" r="1" fill={color} />
    </svg>
  );
}

export function PandasLogo({ className = 'w-5 h-5', color = '#22c55e' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="4" y="3" width="3.2" height="18" rx="1.2" fill={color} />
      <rect x="9.8" y="3" width="3.2" height="6.2" rx="1.2" fill={color} fillOpacity="0.85" />
      <rect x="9.8" y="14.8" width="3.2" height="6.2" rx="1.2" fill={color} fillOpacity="0.85" />
      <rect x="9.8" y="10.6" width="3.2" height="2.8" rx="0.9" fill="#ffaa00" />
      <rect x="15.6" y="3" width="3.2" height="18" rx="1.2" fill={color} />
    </svg>
  );
}

export function FastApiLogo({ className = 'w-5 h-5', color = '#22c55e' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.1" />
      <path
        d="M13.2 5.5L7.5 13H12L10.8 18.5L16.5 11H12L13.2 5.5Z"
        fill={color}
        stroke={color}
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextjsLogo({ className = 'w-5 h-5', color = '#00e5ff' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.8" />
      <path d="M8.5 16V8L16.8 18.2" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 8V13" stroke={color} strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

export function ViteLogo({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M21 4.2L12.3 21.5C12.1 21.9 11.5 21.9 11.3 21.5L3 4.2L12 6.8L21 4.2Z" stroke="#00e5ff" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14.8 2.5L9.2 11.5H13.2L10.8 17.5L17.2 9.5H13L14.8 2.5Z" fill="#ffaa00" />
    </svg>
  );
}

export function PowerBiLogo({ className = 'w-5 h-5', color = '#ffaa00' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="4" y="12" width="4" height="8.5" rx="1.2" fill={color} fillOpacity="0.6" />
      <rect x="10" y="8" width="4" height="12.5" rx="1.2" fill={color} fillOpacity="0.85" />
      <rect x="16" y="3.5" width="4" height="17" rx="1.2" fill={color} />
    </svg>
  );
}

export function ReactLogo({ className = 'w-5 h-5', color = '#00e5ff' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill={color} />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke={color} strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke={color} strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

export function BradescoLogo({ className = 'w-4 h-4', color = '#ff6b00' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M4 16C4 10.5 7.6 6 12 6C16.4 6 20 10.5 20 16" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7.5 16C7.5 12.2 9.5 9.2 12 9.2C14.5 9.2 16.5 12.2 16.5 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M10.5 13.5V20M13.5 13.5V20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SenaiLogo({ className = 'w-4 h-4', color = '#00e5ff' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="3.2" rx="1" fill={color} />
      <rect x="3" y="10.4" width="14" height="3.2" rx="1" fill={color} fillOpacity="0.85" />
      <rect x="3" y="15.8" width="18" height="3.2" rx="1" fill={color} />
    </svg>
  );
}

export function AprendeAkiLogo({ className = 'w-4 h-4', color = '#ffaa00' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path
        d="M12 2.5L4.5 6V11.8C4.5 16.8 7.7 20.9 12 22C16.3 20.9 19.5 16.8 19.5 11.8V6L12 2.5Z"
        stroke={color}
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path d="M12.8 7.5L9.5 12.5H12.2L11.2 16.5L14.5 11.5H11.8L12.8 7.5Z" fill={color} />
    </svg>
  );
}
