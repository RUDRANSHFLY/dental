"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MaxWidthWrapper from "./MaxWidthWrapper";

const CosmeticDentistry = () => {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  const services = [
    "Porcelain Veneers",
    "Invisalign",
    "Dental Implants",
    "Whitening",
  ];

  const images = ["t1.jpg", "t2.jpg", "t3.jpg"];

  return (
      <MaxWidthWrapper>
    <section className="py-16 px-4 bg-white">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-[#004681] text-3xl md:text-4xl font-bold tracking-wide">
            Cosmetic Dentistry
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Your smile is often your first impression you make, so it&apos;s
              important to have a smile that you are confident in showing. Our
              office is known for high-quality cosmetic work with great
              aesthetics.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our office offers a full line of cosmetic dentistry services,
              including:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-1">
              {services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right Image Carousel */}
          <div className="w-full md:w-1/2">
            <Carousel
              opts={{ loop: true }}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={`/images/${img}`}
                        alt={`cosmetic-${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        {/* Learn More Button on Next Row Centered */}
        <div className="mt-12 flex justify-center">
          <Button className="bg-[#004681] hover:bg-[#028FCA] text-white rounded-full px-6 py-3 font-semibold">
            Learn More
          </Button>
        </div>
    </section>
      </MaxWidthWrapper>
  );
};

export default CosmeticDentistry;
