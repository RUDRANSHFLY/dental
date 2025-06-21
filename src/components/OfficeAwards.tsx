import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const OfficeAwards = () => {
  return (
    <section className="py-12 px-4">
      <MaxWidthWrapper className="mx-auto w-full">
        <h1 className="text-[#004681] text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-8 text-center">
          G.O.A.T. awarded at GRC 2023
        </h1>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GO2EjyeMh6M"
              title="Dr. Michael I. Wollock - G.O.A.T. awarded at GRC 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OfficeAwards;
