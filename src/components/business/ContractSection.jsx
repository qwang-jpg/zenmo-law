import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const contractTypes = [
  { title: 'Service & Cooperation Agreements', desc: 'Clearly allocate rights and obligations to minimize performance risk' },
  { title: 'Employment & Contractor', desc: 'Properly structure working relationships and distinguish employee from contractor status' },
  { title: 'Cross-Border Commercial Contracts', desc: 'Address governing law, jurisdiction, and dispute resolution in international transactions' },
  { title: 'Other Business Contracts', desc: 'Drafting and review across a broad range of commercial scenarios, not limited to the above' },
]

export default function ContractSection() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#5073F3', borderColor: '#5073F3', color: '#FFFFFF' }}>
            <FileText size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Contract Drafting & Review</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          Contracts are a fundamental risk management tool for any business. We help clients appropriately allocate rights and obligations in transactions and business relationships, reducing the likelihood of future disputes.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {contractTypes.map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 pl-5">
              <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
