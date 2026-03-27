import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

const companyTypes = [
  { title: 'Corporation (Inc.)', desc: 'Suited for businesses planning to seek investment or pursue a public offering' },
  { title: 'Limited Liability Company (LLC)', desc: 'A flexible entity structure with favorable pass-through tax treatment' },
  { title: 'Not-for-Profit Corporation', desc: 'Appropriate for charitable, educational, and other tax-exempt organizations' },
]

export default function CompanyFormation() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#7860F3', borderColor: '#7860F3', color: '#FFFFFF' }}>
            <Building2 size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Entity Formation & Corporate Governance</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          We assist clients with business registration, corporate structure design, and the establishment of foundational compliance frameworks, providing legal guidance on the requirements and distinctions applicable across different states and entity types.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {companyTypes.map((item) => (
            <div key={item.title} className="bg-zenmo-light-bg rounded-xl p-4 pl-5">
              <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs md:text-sm text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
