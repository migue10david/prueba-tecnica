import Hero from "@/components/Hero";
import EnjoyOptions from "@/components/EnjoyOptions";
import WhatIs from "@/components/WhatIs";
import { CraftedFast } from "@/components/CraftedFast";
import { Comparison } from "@/components/Comparison";
import { MoreWays } from "@/components/MoreWays";
import { TestimonialsAndCta } from "@/components/TestimonialsAndCta";
import PreparationSteps from "@/components/PreparationSteps";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIs />
      <EnjoyOptions />
      <CraftedFast/>
      <PreparationSteps/>
      <Comparison/>
      <MoreWays/>
      <TestimonialsAndCta/>
    </>
  )
}
