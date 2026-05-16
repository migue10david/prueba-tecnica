import Image from "next/image"
import { TitleWithLines } from "./TitleWithLines"
import { CheckIcon } from "./CheckIcon"

const rivoliaPoints = [
  ["Café filtrado", "No es polvo soluble, es café para pasar"],
  ["Sabor limpio y natural", "Sin ese gusto artificial típico del instantáneo"],
  ["Aroma fresco", "Se siente como café recién hecho"],
  ["Listo en 3 minutos", "Rapidez sin sacrificar calidad"],
]

const instantPoints = [
  ["Polvo ultraprocesado", "Pierde gran parte del perfil original"],
  ["Sabor plano artificial", "No hay complejidad ni textura"],
  ["Aroma débil o químico", "No genera experiencia"],
  ["Menor percepción de calidad", "Rápido y barato"],
]

export const Comparison = () => {
  return (
    <section
      aria-labelledby="comparison-title"
      className="relative isolate overflow-hidden bg-[#f8f0e8] px-5 py-9 text-center text-hero-secondary sm:px-10 sm:py-11 lg:px-16 lg:py-32 2xl:px-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.78),transparent_30%),repeating-linear-gradient(105deg,rgba(112,72,52,0.032)_0,rgba(112,72,52,0.032)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto max-w-277.5 2xl:max-w-455">
        <TitleWithLines id="comparison-title">RIVOLIA VS CAFÉ INSTANTÁNEO</TitleWithLines>

        <div className="mt-7 grid grid-cols-2 items-start gap-3 sm:gap-7 lg:hidden">
          <article className="flex min-w-0 flex-col items-center">
            <h3 className="font-cinzel text-[15px] font-extrabold leading-none text-hero-primary sm:text-[24px]">
              RIVOLIA
            </h3>
            <ul className="mt-4 space-y-2.5 text-center">
              {rivoliaPoints.map(([title, detail]) => (
                <li key={title} className="flex flex-col items-center gap-1">
                  <CheckIcon variant="good" />
                  <span className="font-montserrat text-[9px] font-medium leading-[1.12] sm:text-[12px]">
                    <strong className="block font-extrabold">{title}</strong>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-4 h-55 w-[178%] translate-x-[-8%] sm:h-67.5 sm:w-[145%] sm:translate-x-[-8%]">
              <Image
                src="/Sección 6  1- Rivolia vs Café instantáneo_082839.png"
                alt="Rivolia con sachet y taza de café filtrado"
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 48vw, 340px"
                className="object-contain object-bottom"
              />
            </div>
          </article>

          <article className="flex min-w-0 flex-col items-center">
            <h3 className="font-cinzel text-[13px] font-extrabold leading-none text-hero-secondary sm:text-[22px]">
              CAFÉ INSTANTÁNEO
            </h3>
            <ul className="mt-4 space-y-2.5 text-center">
              {instantPoints.map(([title, detail]) => (
                <li key={title} className="flex flex-col items-center gap-1">
                  <CheckIcon variant="bad" />
                  <span className="font-montserrat text-[9px] font-medium leading-[1.12] sm:text-[12px]">
                    <strong className="block font-extrabold">{title}</strong>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-4 h-55 w-[148%] translate-x-[-8%] sm:h-67.5 sm:w-[120%] sm:translate-x-0">
              <Image
                src="/Sección 6 2- Rivolia vs Café instantáneo_082854.png"
                alt="Café instantáneo junto a una taza blanca"
                fill
                sizes="(max-width: 640px) 62vw, (max-width: 1024px) 42vw, 300px"
                className="object-contain object-bottom"
              />
            </div>
          </article>
        </div>

        <div className="relative mt-7 hidden min-h-113.75 lg:block xl:min-h-125 2xl:min-h-140">
          <div className="absolute -bottom-25 -left-13 h-75 w-97.5 xl:-left-25 xl:h-84.5 xl:w-110 2xl:-left-1.5 2xl:h-102.5 2xl:w-133.75">
            <Image
              src="/Sección 6  1- Rivolia vs Café instantáneo_082839.png"
              alt="Rivolia con sachet y taza de café filtrado"
              fill
              sizes="(min-width: 1536px) 535px, 440px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="absolute -bottom-25 -right-9 h-76.25 w-82.5 xl:-right-2.5 xl:h-87.5 xl:w-96.25 2xl:-right-0.5 2xl:h-101.25 2xl:w-125">
            <Image
              src="/Sección 6 2- Rivolia vs Café instantáneo_082854.png"
              alt="Café instantáneo junto a una taza blanca"
              fill
              sizes="(min-width: 1536px) 500px, 385px"
              className="object-contain object-bottom"
            />
          </div>

          <div className="relative z-10 mx-auto grid max-w-190 grid-cols-2 gap-12 pt-12 xl:max-w-205 xl:gap-16 xl:pt-14 2xl:max-w-245 2xl:gap-24 2xl:pt-20">
            <article className="text-center">
              <h3 className="font-cinzel text-[30px] font-extrabold leading-none text-hero-primary xl:text-[36px] 2xl:text-[44px]">
                RIVOLIA
              </h3>
              <ul className="mt-7 space-y-4 2xl:mt-9 2xl:space-y-5">
                {rivoliaPoints.map(([title, detail]) => (
                  <li
                    key={title}
                    className="font-montserrat text-[16px] font-medium leading-[1.16] text-hero-secondary xl:text-[18px] 2xl:text-[22px]"
                  >
                    <strong className="block font-extrabold">{title}</strong>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>

            <article className="text-center">
              <h3 className="font-cinzel text-[27px] font-extrabold leading-none text-hero-secondary xl:text-[33px] 2xl:text-[40px]">
                CAFÉ INSTANTÁNEO
              </h3>
              <ul className="mt-7 space-y-4 2xl:mt-9 2xl:space-y-5">
                {instantPoints.map(([title, detail]) => (
                  <li
                    key={title}
                    className="font-montserrat text-[16px] font-medium leading-[1.16] text-hero-secondary xl:text-[18px] 2xl:text-[22px]"
                  >
                    <strong className="block font-extrabold">{title}</strong>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
