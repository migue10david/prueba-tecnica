import { benefitLines, whatIsLines } from "@/lib/staticText/whatis"
import type { ReactNode } from "react"



const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="flex w-full items-center gap-3 font-cinzel text-[17px] font-extrabold leading-none text-hero-primary sm:gap-5 sm:text-[24px] lg:text-[28px]">
      <span className="h-px flex-1 bg-[#b9a28d]" />
      <span className="shrink-0">{children}</span>
      <span className="h-px flex-1 bg-[#b9a28d]" />
    </h2>
  )
}

const WhatIs = () => {
  return (
    <section
      aria-labelledby="what-is-rivolia-title"
      className="relative isolate overflow-hidden bg-[#efe4d5] px-6 py-7 text-center text-hero-secondary sm:px-10 sm:py-8 lg:px-16 lg:py-9"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.6),transparent_33%),repeating-linear-gradient(104deg,rgba(116,78,53,0.04)_0,rgba(116,78,53,0.04)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto flex max-w-275 flex-col items-center">
        <SectionTitle>
          <span id="what-is-rivolia-title">¿QUÉ ES RIVOLIA?</span>
        </SectionTitle>

        <ul className="mt-3 max-w-152.5 font-montserrat text-[12px] font-medium leading-[1.18] sm:text-[14px] lg:text-[15px]">
          {whatIsLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h3 className="mt-5 font-cinzel text-[18px] font-extrabold leading-none text-hero-primary sm:mt-6 sm:text-[25px] lg:text-[29px]">
          BENEFICIOS
        </h3>

        <ul className="mt-2 max-w-130 font-montserrat text-[12px] font-medium leading-[1.18] sm:text-[14px] lg:text-[15px]">
          {benefitLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhatIs;
