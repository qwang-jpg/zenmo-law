import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function Contact() {
  useSEO(PAGE_SEO.contact)
  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  )
}
