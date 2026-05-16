import { testimonials } from '@/lib/staticText/testimonials'
import Image from 'next/image'

const Testimonials = () => {
  return (
          <div className="relative isolate overflow-hidden px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.72),transparent_34%),repeating-linear-gradient(103deg,rgba(112,72,52,0.035)_0,rgba(112,72,52,0.035)_1px,transparent_1px,transparent_8px)]"
        />

        <div className="relative mx-auto max-w-130 space-y-7">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial}
              className="relative rounded-xs border border-[#dfd0bf] bg-[#f8f1e8] px-6 pb-7 pt-8 text-center shadow-[0_10px_22px_rgba(84,57,42,0.14)]"
            >
              <span className="absolute left-1/2 top-0 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#f8f1e8]">
                <Image src="/Iconos-05_074458.png" alt="" fill sizes="28px" className="object-contain p-1" />
              </span>
              <p className="mt-5 font-cinzel text-[12px] font-extrabold leading-[1.28] sm:text-[16px]">
                “{testimonial}”
              </p>
              <footer className="mt-3 text-right font-cinzel text-[10px] font-bold sm:text-[12px]">
                -CLIENTE
              </footer>
            </blockquote>
          ))}

          <div className="flex justify-center gap-1.5 lg:hidden">
            <span className="size-1.5 rounded-full bg-[#c49c5f]" />
            <span className="size-1.5 rounded-full bg-[#d9c7b4]" />
            <span className="size-1.5 rounded-full bg-[#d9c7b4]" />
          </div>
        </div>
      </div>
  )
}

export default Testimonials
