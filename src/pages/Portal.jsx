import PortalLoginForm from '@/components/portal/PortalLoginForm'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function Portal() {
  useSEO(PAGE_SEO.portal)
  return (
    <PortalLoginForm />
  )
}
