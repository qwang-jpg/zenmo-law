import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'

const statusItems = [
  { title: 'I-539 Change of Status', desc: 'Changing from one nonimmigrant status to another while remaining in the U.S.' },
  { title: 'I-539 Extension of Stay', desc: 'Extending the authorized period of a nonimmigrant status' },
  { title: 'I-539 Reinstatement of Status', desc: 'Restoring a lapsed nonimmigrant status' },
  { title: 'I-765 Employment Authorization (EAD)', desc: 'Application for work authorization' },
  { title: 'I-983 STEM OPT Training Plan', desc: 'STEM OPT extension work authorization' },
  { title: 'I-485 Adjustment of Status', desc: 'Applying for lawful permanent residence from within the United States' },
]

export default function StatusSection() {
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
          <div
            className="icon-framed-rounded"
            style={{ backgroundColor: '#0DB7BD', borderColor: '#0DB7BD', color: '#FFFFFF' }}
          >
            <RefreshCw size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Status Change & Maintenance</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-body mb-6"
        >
          Careful planning of the timing and method of status changes is a critical factor in maintaining lawful immigration status and minimizing risk.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {statusItems.map((item) => (
            <div key={item.title} className="bg-zenmo-light-bg rounded-xl p-4 pl-5">
              <h4 className="text-xs md:text-sm font-semibold text-zenmo-secondary leading-snug">{item.title}</h4>
              <p className="text-xs text-zenmo-text mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
