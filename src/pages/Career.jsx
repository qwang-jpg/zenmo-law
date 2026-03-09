import CareerHero from '@/components/career/CareerHero'
import CareerCulture from '@/components/career/CareerCulture'
import CareerPositions from '@/components/career/CareerPositions'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function Career() {
  useSEO(PAGE_SEO.career)
  return (
    <>
      <CareerHero />
      <CareerCulture />
      <CareerPositions />
    </>
  )
}
