import Image from "next/image"

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/Logo.png"
      alt="TheWCAG.com Logo"
      width={32}
      height={32}
      className={className}
      priority
      aria-hidden="true"
    />
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <Logo className="w-8 h-8 sm:w-9 sm:h-9" />
      <span className="text-xl sm:text-2xl md:text-2xl tracking-tight font-semibold leading-tight">
        <span className="font-light text-foreground/60 lowercase text-lg sm:text-xl md:text-2xl">the</span>
        <span className="font-black bg-gradient-to-r from-primary via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] text-xl sm:text-2xl md:text-2xl ml-0.5">WCAG</span>
      </span>
    </div>
  )
}
