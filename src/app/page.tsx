import { HeroSection } from '@/components/sections/hero'
import { FeaturedVehiclesSection } from '@/components/sections/featured-vehicles'
import { ServicesSection } from '@/components/sections/services'
import { AboutSection } from '@/components/sections/about'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedVehiclesSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  )
}
