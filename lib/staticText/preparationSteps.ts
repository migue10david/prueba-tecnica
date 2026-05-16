import { PreparationStep } from "../types/types";

export const steps: PreparationStep[] = [
  {
    id: "open-sachet",
    label: "1. ABRE EL SACHET",
    image: "/Sección 3 Cards 1 1_063655.png",
    imageAlt: "Sachet individual Rivolia listo para abrir",
    visualClassName:
      "bottom-[28px] left-[-55%] h-[148px] w-[215%] sm:bottom-10 sm:left-[-45%] sm:h-[270px] sm:w-[185%] lg:bottom-12 lg:h-[345px]",
    imageClassName: "object-center",
  },
  {
    id: "place-in-cup",
    label: "2. COLÓCALO EN TU TAZA",
    image: "/Sección 3 Cards 2 1_070305.png",
    imageAlt: "Filtro Rivolia colocado en una taza",
    visualClassName:
      "bottom-[34px] left-[-48%] h-[136px] w-[205%] sm:bottom-12 sm:left-[-34%] sm:h-[250px] sm:w-[172%] lg:bottom-14 lg:h-[322px]",
    imageClassName: "object-center object-bottom",
  },
  {
    id: "pour-water",
    label: "3. VIERTE AGUA CALIENTE",
    image: "/Sección 3 Cards 2 1_070305.png",
    imageAlt: "Agua caliente cayendo sobre el filtro Rivolia",
    visualClassName:
      "bottom-[22px] right-[-50%] h-[160px] w-[255%] sm:bottom-7 sm:right-[-58%] sm:h-[305px] sm:w-[222%] lg:bottom-8 lg:h-[388px]",
    imageClassName: "object-center",
  },
]