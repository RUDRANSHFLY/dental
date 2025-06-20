import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const OfficeTour = () => {
  return (
    <section className="py-12 px-4">
      <MaxWidthWrapper className="mx-auto w-full">
        <h1 className="text-[#004681] text-3xl md:text-4xl font-bold tracking-wide mb-12 text-center">
          Tour Our Office
        </h1>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/uGsNrjwvjR4?si=KaQ3cMTxYrbko5Ws"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OfficeTour;
