import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";
import BentoSection from "../sections/BentoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BentoSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
