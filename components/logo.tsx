export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="text-blue-600" stopColor="currentColor" />
          <stop offset="100%" className="text-blue-400" stopColor="currentColor" />
        </linearGradient>
      </defs>
      
      {/* Outer circle - accessibility symbol */}
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-20" />
      
      {/* Main shield/guideline shape */}
      <path
        d="M20 6L30 11V19C30 26 26 31 20 34C14 31 10 26 10 19V11L20 6Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
        fill="none"
      />
      
      {/* Checkmark with accent */}
      <path
        d="M15 20L18 23L25 15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#DA7756]"
      />
      
      {/* Accessibility dot */}
      <circle cx="20" cy="10" r="1.5" fill="currentColor" className="text-primary" />
    </svg>
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="w-8 h-8" />
      <span className="font-bold text-xl tracking-tight">
        The<span className="text-primary">WCAG</span>
      </span>
    </div>
  )
}
