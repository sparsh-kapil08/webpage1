import HeroSection from '@/components/ui/hero-section';
import ServicesSection from '@/components/ui/services-section';
import WhyChooseUs from '@/components/ui/why-choose-us';
import ProcessSection from '@/components/ui/process-section';
import PortfolioSection from '@/components/ui/portfolio-section';
import PricingSection from '@/components/ui/pricing-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import ContactSection from '@/components/ui/contact-section';
import Footer from '@/components/ui/footer';
import ThreeDBackground from '@/components/ui/3d-background';

export default function HomePage() {
  return (
    <div className="relative">
      {/* 3D Background */}
      <ThreeDBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}