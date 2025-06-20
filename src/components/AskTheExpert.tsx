"use client";

import React, { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const AskTheExpert = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#004681]">Ask the Expert</h1>
      </div>

      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto"
        plugins={[plugin.current]}
      >
        <CarouselContent>
          {["d1.jpg", "d2.jpg", "d3.jpg", "d4.jpg", "d5.jpg"].map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 flex justify-center"
            >
              <div className="relative w-60 h-60 md:w-72 md:h-72">
                <Image
                  src={`/images/${img}`}
                  alt={`carousel-image-${index}`}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default AskTheExpert;
