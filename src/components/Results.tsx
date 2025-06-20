import Image from "next/image";
import Link from "next/link";
import React from "react";

const Results = () => {
  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-[#004681] text-3xl md:text-4xl font-bold tracking-wide mb-12 text-center">
        See The Results
      </h1>

      <div className="flex flex-col md:flex-row justify-evenly items-center gap-y-10 md:gap-y-0 md:gap-x-6">
        {/* Card 1 */}
        <Link
          href="/video-testimonials"
          className="flex flex-col justify-center items-center space-y-4 group transition-transform hover:scale-105"
        >
          <Image
            src={"/images/res1.jpg"}
            width={500}
            height={500}
            alt="res-1"
            className="rounded-xl shadow-lg"
          />
          <p className="text-[#004681] text-2xl font-semibold group-hover:underline">
            Video Testimonials
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          href="/before-after"
          className="flex flex-col justify-center items-center space-y-4 group transition-transform hover:scale-105"
        >
          <Image
            src={"/images/res2.jpg"}
            width={500}
            height={500}
            alt="res-2"
            className="rounded-xl shadow-lg"
          />
          <p className="text-[#004681] text-2xl font-semibold group-hover:underline">
            Before & After
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Results;
