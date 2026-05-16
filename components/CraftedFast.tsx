import Image from "next/image"

export const CraftedFast = () => {
  return (
    <section
      aria-labelledby="crafted-fast-title"
      className="relative isolate overflow-hidden bg-[#b8aa94] px-7 py-10 text-center text-white sm:px-12 sm:py-12 lg:px-20 lg:py-16 lg:text-left"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_66%_48%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(180deg,rgba(72,54,41,0.12),rgba(72,54,41,0.24)),repeating-linear-gradient(108deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto grid min-h-98.75 max-w-280 items-center lg:min-h-62.5 lg:grid-cols-[1fr_0.78fr]">
        <div className="relative z-10 mx-auto max-w-135 lg:mx-0">
          <h2
            id="crafted-fast-title"
            className="font-cinzel text-[20px] font-bold leading-[1.12] tracking-[0.01em] text-[#4E2F2B] drop-shadow-sm sm:text-[38px] lg:text-[33px]"
          >
            NO ES CAFÉ RÁPIDO.
            <br />
            ES CAFÉ BIEN HECHO, RÁPIDO.
          </h2>
          <p className="mx-auto mt-5 max-w-110 font-cinzel text-[13px] font-medium leading-[1.35] tracking-[0.02em] text-[#4E2F2B] sm:text-[18px] lg:mx-0 lg:text-[19px]">
            COMO EL CAFÉ QUE TOMARÍAS EN CASA PERO EN CUALQUIER LUGAR
          </p>
        </div>

        <div className="relative mx-auto mt-8 h-47.5 w-70 sm:h-58.75 sm:w-90 lg:mt-0 lg:h-65 lg:w-97.5 lg:justify-self-end">
          <Image
            src="/Sección 5 1- No es café rápido..._075012.png"
            alt="Taza negra con café Rivolia humeante"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 390px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}