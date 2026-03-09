import HomeHero from '@/components/home/HomeHero'
import HomeNumbers from '@/components/home/HomeNumbers'
import HomePracticeAreas from '@/components/home/HomePracticeAreas'
import ServiceProcess from '@/components/shared/ServiceProcess'
import WhyZenmo from '@/components/shared/WhyZenmo'
import CTASection from '@/components/shared/CTASection'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function Home() {
  useSEO(PAGE_SEO.home)
  return (
    <>
      <HomeHero />
      <HomeNumbers />
      <HomePracticeAreas />
      <ServiceProcess />
      <WhyZenmo />
      <CTASection />
    </>
  )
}
