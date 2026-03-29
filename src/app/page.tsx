import { HeroSection } from '@/components/sections/hero'
import { FeaturedVehiclesSection } from '@/components/sections/featured-vehicles'
import { ServicesSection } from '@/components/sections/services'
import { AboutSection } from '@/components/sections/about'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { ContactSection } from '@/components/sections/contact-section'
import { BrandMarquee } from '@/components/shared/brand-marquee'

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <FeaturedVehiclesSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  )
}
