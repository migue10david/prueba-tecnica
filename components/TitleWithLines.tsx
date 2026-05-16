import { ReactNode } from "react"

export const TitleWithLines = ({
  id,
  children,
  light = false,
}: {
  id?: string
  children: ReactNode
  light?: boolean
}) => {
  return (
    <h2
      id={id}
      className={`flex w-full items-center gap-3 font-cinzel text-[16px] font-extrabold leading-none sm:gap-5 sm:text-[25px] lg:text-[30px] ${
        light ? "text-white" : "text-hero-primary"
      }`}
    >
      <span className={`h-px flex-1 ${light ? "bg-white/70" : "bg-[#b9a28d]"}`} />
      <span className="max-w-[74vw] text-center leading-[1.15] sm:max-w-none sm:shrink-0">
        {children}
      </span>
      <span className={`h-px flex-1 ${light ? "bg-white/70" : "bg-[#b9a28d]"}`} />
    </h2>
  )
}