import { desktopHighlights, mobileHighlights } from '@/lib/staticText/hero'
import Image from 'next/image'


const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6eee6] text-[#4e2f2b]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.74),transparent_28%),repeating-linear-gradient(105deg,rgba(112,72,52,0.045)_0,rgba(112,72,52,0.045)_1px,transparent_1px,transparent_7px)] opacity-80"
      />


      <div className="relative mx-auto grid min-h-126.25 w-full max-w-295 grid-cols-1 px-6 pt-14 sm:min-h-113.75 sm:grid-cols-[0.82fr_1.18fr] sm:items-center sm:gap-4 sm:px-10 sm:py-10 lg:min-h-131.5 lg:gap-8 lg:pl-34 lg:pr-0 2xl:min-h-175">
        <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="font-montserrat text-[32px] font-extrabold leading-none tracking-[0.01em] text-hero-primary sm:text-[42px] lg:text-[52px]">
            RIVOLIA
          </h1>

          <p className="mt-3 font-cinzel text-[18px] font-bold leading-[1.12] text-hero-secondary sm:text-[25px] lg:text-[29px]">
            <span className="whitespace-nowrap">CAFÉ REAL. SIN MÁQUINA.</span>
            <span className="block">SIN COMPLICACIONES.</span>
          </p>

          <p className="mt-8 hidden max-w-85 font-cinzel text-[15px] font-medium leading-[1.3] text-hero-secondary sm:block lg:text-[17px]">
            ABRE, VIERTE AGUA CALIENTE Y DISFRUTA. ASÍ DE SIMPLE.
          </p>

          <button
            type="button"
            className="mt-6 w-47.5 rounded-[7px] bg-[#5b342f] px-5 py-3 font-montserrat text-[15px] font-bold leading-none text-white shadow-[0_10px_18px_rgba(75,42,37,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[hover-secondary] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#a61e22] sm:hidden"
          >
            Comprar ahora
          </button>

          <ul className="mt-5 flex flex-col items-center gap-3 font-cinzel text-[12px] font-semibold leading-none text-hero-secondary sm:hidden">
            {mobileHighlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-1.5">
                <span className="flex size-3.75 items-center justify-center rounded-full bg-[#22a557] font-montserrat text-[10px] font-black text-white">
                  ✓
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 hidden w-full sm:block">
            <ul className="flex flex-col gap-3.5 font-cinzel text-[14px] font-medium leading-none text-hero-secondary lg:text-[16px]">
              {desktopHighlights.map((highlight) => (
                <li key={highlight.text} className="flex items-center gap-2.5">
                  <span className="relative block size-5 shrink-0 lg:size-6">
                    <Image
                      src={highlight.icon}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </span>
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 w-75 max-w-full rounded-[7px] bg-[#5b342f] px-8 py-4 font-montserrat text-[22px] font-bold leading-none text-white shadow-[0_12px_22px_rgba(75,42,37,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#271110] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[#a61e22] lg:w-[320px] lg:text-[24px]"
            >
              Comprar ahora
            </button>

            <p className="mt-4 w-75 max-w-full text-center font-cinzel text-[13px] font-medium text-hero-secondary lg:w-[320px] lg:text-[15px]">
              DESDE $3 POR TAZA
            </p>
          </div>
        </div>

        <div className="relative z-0 -mx-6 mt-4 h-85 w-[calc(100%+48px)] sm:hidden md:h-113.75 md:w-120 lg:h-131.5 lg:w-137.5 xl:w-150">
          <Image
            src="/Hero de Desktop 1_054349.png"
            alt="Pack Rivolia con caja, sachet y taza de café filtrado"
            fill
            preload
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 400px, (max-width: 1024px) 480px, 600px"
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-125 sm:block md:w-112.5 lg:w-137.5 xl:w-225 2xl:w-275">
        <Image
          src="/Hero de Desktop 1_054349.png"
          alt="Pack Rivolia con caja, sachet y taza de café filtrado"
          fill
          preload
          sizes="(max-width: 1024px) 500px, (max-width: 1280px) 720px, (max-width: 1536px) 900px, 1100px"
          className="object-contain object-right"
        />
      </div>
    </section>
  )
}
export default Hero
