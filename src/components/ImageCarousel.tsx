"use client"

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImageCarousel = () => {
  return (
    <Carousel opts={{
        loop : true
    }} className="w-full mx-auto">
      <CarouselContent>
        {["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg"].map((img, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <Image
              width={400}
              height={400}
              src={`/images/${img}`}
              alt={`carousel-image-${index}`}
              className="rounded-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
