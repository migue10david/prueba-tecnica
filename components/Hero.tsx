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
          {/* <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-0 -translate-x-1/2 rounded-full bg-[#4E2F2B] p-2 shadow-lg transition duration-200 hover:scale-110">
            <svg className="size-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a> */}
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
        <a href="https://wa.me/TUNUMERO" target="_blank" rel="noopener noreferrer" className="pointer-events-auto absolute bottom-20 right-2 -translate-x-1/2 rounded-full bg-[#4E2F2B] p-2.5 shadow-lg transition duration-200 hover:scale-110">
          <svg className="size-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
export default Hero
