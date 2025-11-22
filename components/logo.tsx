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
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo className="w-8 h-8 sm:w-9 sm:h-9" />
      <span className="text-xl sm:text-2xl tracking-tighter leading-none select-none">
        <span className="font-light text-foreground/80">the</span>
        <span className="font-black bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">WCAG</span>
      </span>
    </div>
  )
}
