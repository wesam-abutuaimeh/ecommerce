import HeroSection from "@/components/sections/HeroSection";
import DealsAndOffersSection from "@/components/sections/DealsAndOffersSection/";
import RecommendedItems from "@/components/sections/RecommendedItems";
import Services from "@/components/sections/Services/";
import Regions from "@/components/sections/Regions";
import Subscription from "@/components/sections/Subscription";
import Contact from "@/components/sections/Contact";
import HomeAndOutdoor from "@/components/sections/HomeAndOutdoor";
import ConsumerElectronicsAndGadgets from "@/components/sections/ConsumerElectronicsAndGadgets";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DealsAndOffersSection />
      <HomeAndOutdoor />
      <ConsumerElectronicsAndGadgets />
      <Contact />
      <RecommendedItems />
      <Services />
      <Regions />
      <Subscription />
      <Footer />
    </main>
  );
}
