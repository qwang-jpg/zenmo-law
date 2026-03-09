import { motion } from 'framer-motion'
import { CreditCard } from 'lucide-react'

const greenCardItems = [
  { title: 'EB-1A Extraordinary Ability', desc: 'For individuals with extraordinary ability in their field' },
  { title: 'EB-1B Outstanding Researchers & Professors', desc: 'For outstanding professors and researchers' },
  { title: 'EB-1C Multinational Managers & Executives', desc: 'For senior managers and executives of multinational companies' },
  { title: 'EB-2/3 Employment-Based', desc: 'Employer-sponsored employment-based immigration' },
  { title: 'EB-2 NIW National Interest Waiver', desc: 'Employment-based pathway without employer sponsorship' },
  { title: 'EB-5 Immigrant Investor Program', desc: 'Investment-based immigration through job creation' },
  { title: 'Family-Based Green Cards', desc: 'Permanent residence based on qualifying family relationships' },
]

export default function GreenCardSection() {
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
          <div
            className="icon-framed-rounded"
            style={{ backgroundColor: '#5073F3', borderColor: '#5073F3', color: '#FFFFFF' }}
          >
            <CreditCard size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Green Card Applications</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-body mb-6"
        >
          We help clients assess the viability of different permanent residence pathways, analyze the impact of visa bulletin priority dates, and provide ongoing legal support throughout the application process.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {greenCardItems.map((item) => (
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
