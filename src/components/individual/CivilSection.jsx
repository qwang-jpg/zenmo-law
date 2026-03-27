import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

const items = [
  { title: 'Contract Disputes', desc: 'Handling breach of contract, termination, and damages claims' },
  { title: 'Property Disputes', desc: 'Protecting rights and interests in real property and estate matters' },
  { title: 'Consumer Protection', desc: 'Asserting your legal rights as a consumer under applicable law' },
  { title: 'Debt Recovery', desc: 'Assisting in the recovery of outstanding debts and associated losses' },
]

export default function CivilSection() {
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
          <div className="icon-framed-rounded" style={{ backgroundColor: '#0DB7BD', borderColor: '#0DB7BD', color: '#FFFFFF' }}>
            <Scale size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Civil Disputes</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          We provide legal representation for individual clients in civil disputes, including contract disagreements, property conflicts, and consumer protection matters.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((item) => (
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
