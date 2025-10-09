// Feature Icons - Brand-consistent SVG icons
// Using brand colors: Crimson (#ac0234) and White (#FFFFFF)

export const LightningIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
      fill="#ac0234"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparklesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z"
      fill="#ac0234"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 3L19.5 5L21.5 5.5L19.5 6L19 8L18.5 6L16.5 5.5L18.5 5L19 3Z"
      fill="#ac0234"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 16L19.5 18L21.5 18.5L19.5 19L19 21L18.5 19L16.5 18.5L18.5 18L19 16Z"
      fill="#ac0234"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DeviceIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="5"
      y="4"
      width="14"
      height="16"
      rx="2"
      fill="none"
      stroke="#ac0234"
      strokeWidth="1.5"
    />
    <rect
      x="5"
      y="4"
      width="14"
      height="13"
      rx="2"
      fill="#ac0234"
      fillOpacity="0.2"
    />
    <line
      x1="12"
      y1="18"
      x2="12"
      y2="18"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CodeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 18L22 12L16 6"
      stroke="#ac0234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6L2 12L8 18"
      stroke="#ac0234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="14"
      y1="4"
      x2="10"
      y2="20"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="#ac0234" fillOpacity="0.2" />
    <path
      d="M8 12L11 15L16 9"
      stroke="#ac0234"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfinityIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.178 8C16.6 6 14.75 5.5 13.5 6.5C12.25 7.5 12.25 9.5 13.5 10.5C14.75 11.5 15.5 11.5 16.75 10.5C18 9.5 19 8 18.178 8Z"
      fill="#ac0234"
      fillOpacity="0.3"
    />
    <path
      d="M5.822 8C7.4 6 9.25 5.5 10.5 6.5C11.75 7.5 11.75 9.5 10.5 10.5C9.25 11.5 8.5 11.5 7.25 10.5C6 9.5 5 8 5.822 8Z"
      fill="#ac0234"
      fillOpacity="0.3"
    />
    <path
      d="M18.178 8C19.8 10 19.8 14 18.178 16C16.556 18 13.778 18 12 16C10.222 14 10.222 14 8.444 16C6.667 18 3.889 18 2.267 16C0.644 14 0.644 10 2.267 8C3.889 6 6.667 6 8.444 8C10.222 10 10.222 10 12 8C13.778 6 16.556 6 18.178 8Z"
      stroke="#ac0234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownloadIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3V15M12 15L8 11M12 15L16 11"
      stroke="#ac0234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17"
      stroke="#ac0234"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="15" r="1.5" fill="#FFFFFF" />
  </svg>
);
