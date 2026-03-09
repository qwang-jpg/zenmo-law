import AttorneyAdvertisingContent from '@/components/attorney-advertising/AttorneyAdvertisingContent'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function AttorneyAdvertising() {
  useSEO(PAGE_SEO.attorneyAdvertising)
  return (
    <AttorneyAdvertisingContent />
  )
}
