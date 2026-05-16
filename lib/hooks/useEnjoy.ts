import { useRef, useState } from "react";
import { options } from "../staticText/enjoyOptions";

export const useEnjoy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
      const carouselRef = useRef<HTMLDivElement>(null);
      const cardRefs = useRef<Array<HTMLElement | null>>([]);
    
      const scrollToOption = (index: number) => {
        const nextIndex = (index + options.length) % options.length;
    
        setActiveIndex(nextIndex);
        cardRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      };
    
      const syncActiveCard = () => {
        const carousel = carouselRef.current;
    
        if (!carousel) {
          return;
        }
    
        const carouselCenter =
          carousel.getBoundingClientRect().left + carousel.offsetWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;
    
        cardRefs.current.forEach((card, index) => {
          if (!card) {
            return;
          }
    
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(carouselCenter - cardCenter);
    
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
    
        setActiveIndex((currentIndex) =>
          currentIndex === closestIndex ? currentIndex : closestIndex,
        );
      };

      return {
        activeIndex,
        scrollToOption,
        syncActiveCard,
        carouselRef,
        cardRefs,
      }
}