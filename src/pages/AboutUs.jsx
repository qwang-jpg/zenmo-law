import AboutHero from '@/components/about/AboutHero'
import AboutContent from '@/components/about/AboutContent'
import AboutCompliance from '@/components/about/AboutCompliance'
import CTASection from '@/components/shared/CTASection'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function AboutUs() {
  useSEO(PAGE_SEO.about)
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutCompliance />
      <CTASection />
    </>
  )
}
