"use client";

import { options } from "@/lib/staticText/enjoyOptions";
import OptionsCard from "./OptionsCard";
import { useEnjoy } from "@/lib/hooks/useEnjoy";

const EnjoyOptions = () => {
  const { activeIndex, scrollToOption, syncActiveCard, carouselRef, cardRefs } = useEnjoy();

  return (
    <section
      aria-labelledby="enjoy-options-title"
      className="relative isolate overflow-hidden bg-[#fbf4ef] px-0 py-8 text-center text-hero-secondary sm:px-8 sm:py-10 lg:px-16 lg:py-11"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.74),transparent_35%),repeating-linear-gradient(103deg,rgba(112,72,52,0.035)_0,rgba(112,72,52,0.035)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto max-w-277.5">
        <h2
          id="enjoy-options-title"
          className="mx-6 flex items-center gap-3 font-cinzel text-[18px] font-extrabold leading-none text-hero-primary sm:mx-0 sm:gap-5 sm:text-[26px] lg:text-[31px]"
        >
          <span className="h-px flex-1 bg-[#b9a28d]" />
          <span className="shrink-0">ELIGE CÓMO DISFRUTAR RIVOLIA</span>
          <span className="h-px flex-1 bg-[#b9a28d]" />
        </h2>

        <div className="relative mt-7 sm:mt-9">
          <button
            type="button"
            aria-label="Ver opción anterior"
            onClick={() => scrollToOption(activeIndex - 1)}
            className="absolute left-3 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#c8b59f]/95 font-montserrat text-[26px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(79,52,37,0.18)] transition duration-200 hover:bg-[#bba78f] active:scale-95 sm:hidden"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Ver siguiente opción"
            onClick={() => scrollToOption(activeIndex + 1)}
            className="absolute right-3 top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-[5px] bg-[#c8b59f]/95 font-montserrat text-[26px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(79,52,37,0.18)] transition duration-200 hover:bg-[#bba78f] active:scale-95 sm:hidden"
          >
            ›
          </button>

          <div
            ref={carouselRef}
            onScroll={syncActiveCard}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-10 pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-5 sm:gap-4 sm:overflow-visible sm:px-0 lg:gap-5"
          >
            {options.map((option, index) => (
              <OptionsCard
                key={index}
                activeIndex={activeIndex}
                option={option}
                cardRefs={cardRefs}
                index={index}
              />
            ))}
          </div>

          {/* <div className="mt-5 flex justify-center gap-1.5 sm:hidden">
            {options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                aria-label={`Ver ${option.title}`}
                onClick={() => scrollToOption(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-5 bg-[#b39161]"
                    : "w-1.5 bg-[#d7c7b5]"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EnjoyOptions;
