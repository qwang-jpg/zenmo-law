import LegalStatementContent from '@/components/legal-statement/LegalStatementContent'
import { useSEO, PAGE_SEO } from '@/hooks/useSEO'

export default function LegalStatement() {
  useSEO(PAGE_SEO.legal)
  return (
    <LegalStatementContent />
  )
}
