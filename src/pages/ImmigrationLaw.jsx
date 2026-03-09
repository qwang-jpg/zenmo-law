import ImmigrationHero from '@/components/immigration/ImmigrationHero'
import VisaSection from '@/components/immigration/VisaSection'
import GreenCardSection from '@/components/immigration/GreenCardSection'
import StatusSection from '@/components/immigration/StatusSection'
import EmployerSection from '@/components/immigration/EmployerSection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function ImmigrationLaw() {
  useSEO(PAGE_SEO.immigration)
  return (
    <>
      <ImmigrationHero />
      <VisaSection />
      <GreenCardSection />
      <StatusSection />
      <EmployerSection />
      <ServiceProcess variant="section" />
      <CTASection
        title="Discuss Your Immigration Pathway With Us"
        description="Whether you are in the early stages of planning your move to the U.S., or are already studying, working, or running a business here, we can help you clearly identify viable pathways and potential risks at the assessment and strategy level, and advance your legal matters through a transparent process."
      />
    </>
  )
}
