import Image from 'next/image'

const CtaSection = () => {
  return (
    <div className="relative isolate min-h-47 overflow-hidden px-4 py-5 text-center sm:min-h-77.5 sm:px-8 sm:py-9 lg:min-h-110 lg:px-10 lg:py-12 xl:px-16">
      <div aria-hidden="true" className="absolute inset-0 bg-[#f6eee4]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_42%,rgba(255,255,255,0.9),transparent_34%),linear-gradient(90deg,rgba(242,230,216,0.8)_0,rgba(250,245,238,0.9)_48%,rgba(244,234,221,0.78)_100%),repeating-linear-gradient(105deg,rgba(112,72,52,0.032)_0,rgba(112,72,52,0.032)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto min-h-37 max-w-155 sm:min-h-63 lg:min-h-86 xl:max-w-175">
        <div className="relative z-20 mx-auto max-w-140">
          <h2 className="flex items-center gap-2 font-cinzel text-[9px] font-extrabold leading-[1.18] text-hero-secondary sm:gap-4 sm:text-[18px] lg:text-[20px] xl:text-[23px]">
            <span className="h-px flex-1 bg-[#8b6d62]" />
            <span className="shrink-0 text-center">
              NO HAY MEJOR MOMENTO
              <br />
              PARA PROBAR RIVOLIA
            </span>
            <span className="h-px flex-1 bg-[#8b6d62]" />
          </h2>
        </div>

        <div className="relative z-20 mt-4 flex w-24 flex-col gap-2 sm:mt-8 sm:w-42.5 sm:gap-3 lg:mt-10 lg:w-51.25 xl:w-58.75">
          <button
            type="button"
            className="h-6 rounded-md bg-[#5b342f] px-3 font-montserrat text-[7px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(71,40,35,0.16)] transition duration-200 hover:bg-[#271110] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#5b342f] sm:h-10 sm:text-[12px] lg:h-12 lg:text-[15px]"
          >
            Comprar ahora
          </button>
          <button
            type="button"
            className="h-6 rounded-md bg-[#a61e22] px-3 font-montserrat text-[7px] font-bold leading-none text-white shadow-[0_8px_18px_rgba(166,30,34,0.18)] transition duration-200 hover:bg-[#86181c] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#a61e22] sm:h-10 sm:text-[12px] lg:h-12 lg:text-[15px]"
          >
            Comprar pack 20
          </button>
        </div>

        <div className="relative z-20 mt-5 flex w-24 flex-col items-center text-center sm:mt-8 sm:w-42.5 lg:mt-10 lg:w-51.25 xl:w-58.75">
          <span className="relative block size-5 sm:size-8 lg:size-10">
            <Image
              src="/Iconos-02_074458.png"
              alt=""
              fill
              sizes="(max-width: 640px) 20px, (max-width: 1024px) 32px, 40px"
              className="object-contain"
            />
          </span>
          <p className="mt-1 font-cinzel text-[7px] font-extrabold leading-[1.05] text-hero-primary sm:mt-2 sm:text-[13px] lg:text-[15px]">
            ÚLTIMOS
            <br />
            PACKS DISPONIBLES
          </p>
        </div>

        <div className="absolute -bottom-5 -right-3.5 z-10 h-40 w-50 sm:hidden">
          <Image
            src="/Hero de Desktop 1_054349.png"
            alt="Sachet Rivolia con taza de café filtrado"
            fill
            sizes="(max-width: 640px) 200px"
            className="object-contain object-bottom"
          />
        </div>
        <div className="absolute -bottom-9 -right-14 z-10 hidden h-75 w-95 sm:block lg:-bottom-12.5 lg:-right-32.5 lg:h-105 lg:w-100 xl:-right-30 xl:h-90 xl:w-145">
          <Image
            src="/Sección 3 Cards 2 1_070305.png"
            alt="Sachet Rivolia con taza de café filtrado"
            fill
            sizes="(max-width: 1024px) 380px, (max-width: 1280px) 520px, 580px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  )
}

export default CtaSection
