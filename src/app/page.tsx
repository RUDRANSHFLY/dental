import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <main>
      <Header />
      <MaxWidthWrapper>
        <ImageCarousel />
      </MaxWidthWrapper>
    </main>
  );
}
