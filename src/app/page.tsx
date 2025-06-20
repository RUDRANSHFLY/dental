import AskTheExpert from "@/components/AskTheExpert";
import CosmeticDentistry from "@/components/CosmeticDentistry";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OfficeAwards from "@/components/OfficeAwards";
import OfficeTour from "@/components/OfficeTour";
import Results from "@/components/Results";
import Reviews from "@/components/Reviews";
import Schedule from "@/components/Schedule";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero / Carousel */}
      <section className="min-h-screen py-10">
        <MaxWidthWrapper>
          <ImageCarousel />
        </MaxWidthWrapper>
      </section>

      {/* Schedule & Reviews */}
      <section className="w-screen py-16">
        <Schedule />
        <div className="mt-10">
          <Reviews />
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <MaxWidthWrapper>
          <Results />
        </MaxWidthWrapper>
      </section>

      <OfficeTour />
      <OfficeAwards />
      <AskTheExpert />
      <CosmeticDentistry />
      <Footer />
    </main>
  );
}
