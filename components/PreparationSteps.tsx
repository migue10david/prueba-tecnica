import { steps } from "@/lib/staticText/preparationSteps"
import Image from "next/image"


const PreparationSteps = () => {
  return (
    <section
      aria-labelledby="preparation-steps-title"
      className="relative isolate overflow-hidden bg-[#6e432c] text-white"
    >
      <div className="grid grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.id}
            className="relative min-h-55 overflow-hidden border-r border-white/10 last:border-r-0 sm:min-h-95 lg:min-h-115"
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 ${
                index === 1
                  ? "bg-[#70462d]"
                  : index === 2
                    ? "bg-[#5d3825]"
                    : "bg-[#7a4d32]"
              }`}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_0,transparent_16%,rgba(0,0,0,0.12)_55%,transparent_100%),repeating-linear-gradient(0deg,rgba(255,255,255,0.045)_0,rgba(255,255,255,0.045)_1px,transparent_1px,transparent_13px)] opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,239,214,0.26),transparent_36%),linear-gradient(180deg,rgba(33,18,13,0.12),transparent_38%,rgba(28,14,10,0.38))]"
            />

            <div className={`absolute ${step.visualClassName}`}>
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 55vw, 620px"
                className={`object-contain ${step.imageClassName ?? ""}`}
              />
            </div>

            <p className="absolute text-center inset-x-4 bottom-3 z-20 font-cinzel text-[7px] font-extrabold leading-none tracking-[0.01em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] sm:bottom-6 sm:text-[14px] lg:bottom-5 lg:text-[17px]">
              {step.label}
            </p>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-3 z-30 px-5 text-center sm:top-7 lg:top-8">
        <h2
          id="preparation-steps-title"
          className="mx-auto flex max-w-270 items-center gap-2 font-cinzel text-[10px] font-extrabold leading-none tracking-[0.02em] sm:gap-4 sm:text-[24px] lg:text-[30px]"
        >
          <span className="h-px flex-1 bg-white/70" />
          <span className="shrink-0">MÁS FÁCIL QUE PREPARAR TÉ</span>
          <span className="h-px flex-1 bg-white/70" />
        </h2>
        <p className="mt-1 font-cinzel text-[7px] font-bold leading-none tracking-[0.04em] sm:mt-3 sm:text-[14px] lg:text-[17px]">
          CAFÉ FILTRADO, FRESCO Y LISTO.
        </p>
      </div>
    </section>
  )
}

export default PreparationSteps
