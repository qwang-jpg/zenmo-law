import IndividualHero from '@/components/individual/IndividualHero'
import TrafficSection from '@/components/individual/TrafficSection'
import CivilSection from '@/components/individual/CivilSection'
import InjurySection from '@/components/individual/InjurySection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function IndividualLaw() {
  useSEO(PAGE_SEO.individual)
  return (
    <>
      <IndividualHero />
      <TrafficSection />
      <CivilSection />
      <InjurySection />
      <ServiceProcess variant="section" />
      <CTASection
        title="Need Individual Legal Support?"
        description="Whether you are dealing with a traffic violation, a civil dispute, or a personal injury matter, we are here to provide professional legal advice and representation tailored to your situation."
      />
    </>
  )
}
