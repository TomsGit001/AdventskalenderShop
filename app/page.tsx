import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import BookPreview from "@/components/BookPreview";
import ProductDetails from "@/components/ProductDetails";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <BookPreview />
      <ProductDetails />
      <Faq />
      <Footer />
    </main>
  );
}
