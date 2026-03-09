import PrivacyPolicyContent from '@/components/privacy-policy/PrivacyPolicyContent'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function PrivacyPolicy() {
  useSEO(PAGE_SEO.privacy)
  return (
    <PrivacyPolicyContent />
  )
}
