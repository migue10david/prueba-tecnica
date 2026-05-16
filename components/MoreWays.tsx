import Image from "next/image"
import { TitleWithLines } from "./TitleWithLines"

export const MoreWays = () => {
  return (
    <section
      aria-labelledby="more-ways-title"
      className="relative isolate overflow-hidden bg-[#f7efe6] px-0 pb-0 pt-8 text-center sm:pt-10 lg:pt-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_34%),repeating-linear-gradient(105deg,rgba(112,72,52,0.035)_0,rgba(112,72,52,0.035)_1px,transparent_1px,transparent_8px)]"
      />

      <div className="relative mx-auto max-w-277.5 px-6 sm:px-10 lg:px-16">
        <TitleWithLines id="more-ways-title">MÁS FORMAS DE DISFRUTAR RIVOLIA</TitleWithLines>
      </div>

      <div className="relative mx-auto mt-7 h-61.25 max-w-full sm:h-82.5 lg:mt-9 lg:h-120 xl:h-170">
        <Image
          src="/Sección 7 1- Más formas de disfrutar Rivolia 1_090258.png"
          alt="Granos de café, canela y especias para preparar Rivolia"
          fill
          sizes="100vw"
          className="object-cover object-center xl:object-bottom"
        />
      </div>
    </section>
  )
}