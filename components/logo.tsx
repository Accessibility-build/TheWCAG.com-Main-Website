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
    <div className={`flex items-center gap-2 ${className}`}>
      <Logo className="w-8 h-8" />
      <span className="font-bold text-xl tracking-tight">
        The<span className="text-primary">WCAG</span>
      </span>
    </div>
  )
}
