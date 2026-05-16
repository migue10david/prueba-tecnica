import CtaSection from "./CtaSection"
import Testimonials from "./Testimonials"



export const TestimonialsAndCta = () => {
  return (
    <section className="grid bg-[#eee2d0] text-hero-secondary lg:grid-cols-2">
      <Testimonials/>
      <CtaSection/>
    </section>
  )
}