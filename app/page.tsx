import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FactsSection } from "@/components/sections/facts-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteHeader } from "@/components/site-header";
import { StoriesSection } from "@/components/sections/stories-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <WorkSection />
      <FactsSection />
      <AboutSection />
      <TestimonialsSection />
      <ServicesSection />
      <StoriesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
