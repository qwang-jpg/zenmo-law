import BusinessHero from '@/components/business/BusinessHero'
import CompanyFormation from '@/components/business/CompanyFormation'
import ContractSection from '@/components/business/ContractSection'
import IPSection from '@/components/business/IPSection'
import ServiceProcess from '@/components/shared/ServiceProcess'
import CTASection from '@/components/shared/CTASection'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function BusinessLaw() {
  useSEO(PAGE_SEO.business)
  return (
    <>
      <BusinessHero />
      <CompanyFormation />
      <ContractSection />
      <IPSection />
      <ServiceProcess variant="section" />
      <CTASection
        title="Discuss Your Business Legal Needs With Us"
        description="Whether you are planning to establish a company in the U.S. or are already operating and facing compliance or contract-related issues, we can help you assess risks and explore viable options at the strategic level, and move forward with your legal matters through a professional process."
      />
    </>
  )
}
