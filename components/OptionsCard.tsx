import { OptionCard } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

type Props = {
    option: OptionCard
    cardRefs: React.MutableRefObject<Array<HTMLElement | null>>
    activeIndex: number
    index: number
}

const OptionsCard = ({ option, cardRefs, activeIndex, index }: Props) => {
  return (
    <article
      key={option.id}
      id={option.id}
      ref={(card) => {
        cardRefs.current[index] = card;
      }}
      className={`flex min-h-56 min-w-29.5 snap-center flex-col overflow-hidden rounded-lg border border-[#e6dbd0] bg-[#f1e8df] shadow-[0_12px_28px_rgba(81,54,39,0.09)] transition duration-300 ease-out sm:min-h-80 sm:min-w-0 sm:scale-100 sm:opacity-100 lg:min-h-87.5 ${
        activeIndex === index
          ? "scale-100 opacity-100"
          : "scale-[0.96] opacity-75"
      }`}
    >
      <div className="flex min-h-22 flex-col items-center justify-start px-2 pb-1 pt-5 sm:min-h-31.5 sm:px-3 sm:pt-7 lg:min-h-34.5 lg:px-4">
        <h3 className="font-cinzel text-[11px] font-extrabold leading-[1.12] text-hero-primary sm:text-[14px] lg:text-[16px]">
          {option.title}
        </h3>
        {option.eyebrow ? (
          <p className="mt-3 font-montserrat text-[10px] font-bold leading-none text-[#92704f] sm:text-[11px] lg:text-[12px]">
            {option.eyebrow}
          </p>
        ) : null}
        <p className="mt-3 font-montserrat text-[10px] font-semibold leading-[1.12] text-hero-secondary sm:text-[13px] lg:text-[14px]">
          {option.description}
        </p>
        <p className="mt-1 font-montserrat text-[9px] font-medium leading-[1.12] text-hero-secondary/80 sm:text-[12px] lg:text-[13px]">
          {option.subdescription}
        </p>
      </div>

      <div className="relative mx-auto mt-auto h-22 w-full sm:h-32.5 lg:h-37.5">
        {option.image ? (
          <Image
            src={option.image}
            alt={option.imageAlt ?? ""}
            fill
            sizes="(max-width: 640px) 118px, (max-width: 1024px) 18vw, 190px"
            className="object-contain object-bottom"
          />
        ) : null}
      </div>

      <button
        type="button"
        className="mt-auto h-7.5 bg-[#d7cabe] font-montserrat text-[10px] font-extrabold leading-none text-hero-secondary transition duration-200 hover:bg-[#cdbdad] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#a61e22] sm:h-10 sm:text-[13px] lg:h-11.25 lg:text-[15px]"
      >
        COMPRAR
      </button>
    </article>
  );
};

export default OptionsCard;
