import React from "react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Schedule = () => {
  return (
    <div className="bg-[#004681] text-white py-16 px-4">
      <MaxWidthWrapper className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wide">
            $80/paycheck or 3,279
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance">
            All-Inclusive Invisalign®
          </h1>
          <Button className="bg-[#029FDE] hover:bg-[#028FCA] rounded-full px-6 py-3 text-white font-semibold">
            Schedule A Consultation
          </Button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-balance">
            The Best Deal, The Best Reviews & The Most Experience.
          </h3>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed text-justify max-w-prose">
            With hundreds of hours of continuing education, Dr. Wollock uses his expertise to train, mentor, and teach other Invisalign dentists across North America. Dr. Wollock brings a wealth of experience to solve your issues with the added benefit of a volume discount.
          </p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Schedule;
