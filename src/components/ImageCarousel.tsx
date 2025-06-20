"use client";

import React, { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const ImageCarousel = () => {

const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-full h-full mx-auto"
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg"].map(
          (img, index) => (
            <CarouselItem
              key={index}
              className="w-full relative flex justify-center"
            >
              <div className="relative w-full h-screen">
                <Image
                  src={`/images/${img}`}
                  alt={`carousel-image-${index}`}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
