export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shield outline */}
      <path
        d="M20 4L32 10V18C32 26 28 32 20 36C12 32 8 26 8 18V10L20 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
        fill="none"
      />
      {/* Check mark */}
      <path
        d="M14 20L18 24L26 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#DA7756]"
      />
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
