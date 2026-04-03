import { HeroSection } from '@/components/sections/hero'
import { FeaturedVehiclesSection } from '@/components/sections/featured-vehicles'
import { ServicesSection } from '@/components/sections/services'
import { AboutSection } from '@/components/sections/about'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { ContactSection } from '@/components/sections/contact-section'
import { BrandMarquee } from '@/components/shared/brand-marquee'

function SectionDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-[#E53935]/40 to-transparent" aria-hidden="true" />
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandMarquee />
      <SectionDivider />
      <FeaturedVehiclesSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <WhyChooseUsSection />
      <SectionDivider />
      <ContactSection />
    </>
  )
}
