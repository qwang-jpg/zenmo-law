import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const workVisas = [
  { title: 'H-1B Specialty Occupation Work Visa', desc: 'Work visa for specialty occupation professionals' },
  { title: 'L-1 Intracompany Transferee Visa', desc: 'For managers and executives transferring within multinational companies' },
  { title: 'O-1 Extraordinary Ability Work Visa', desc: 'For individuals with extraordinary ability or achievement' },
]

const studyVisas = [
  { title: 'F-1 Student Visa · OPT / STEM OPT', desc: 'Student visa and post-completion work authorization' },
  { title: 'J-1 Exchange Visitor Visa · J-1 Waiver', desc: 'Visa for exchange visitor programs' },
]

function VisaItem({ item }) {
  return (
    <div className="bg-white rounded-lg p-4 pl-5">
      <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary">{item.title}</h4>
      <p className="text-xs md:text-sm text-zenmo-text mt-0.5">{item.desc}</p>
    </div>
  )
}

export default function VisaSection() {
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
            style={{ backgroundColor: '#7860F3', borderColor: '#7860F3', color: '#FFFFFF' }}
          >
            <FileText size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Visa Applications</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-body mb-6"
        >
          We assist clients in evaluating visa category eligibility, preparing application materials, and providing legal guidance on entry compliance and long-term status planning.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div className="bg-zenmo-light-bg rounded-xl p-4">
            <h4 className="text-sm font-semibold text-zenmo-secondary/70 uppercase tracking-wide mb-3">Work Visas</h4>
            <div className="flex flex-col gap-2">
              {workVisas.map((v) => <VisaItem key={v.title} item={v} />)}
            </div>
          </div>
          <div className="bg-zenmo-light-bg rounded-xl p-4">
            <h4 className="text-sm font-semibold text-zenmo-secondary/70 uppercase tracking-wide mb-3">Student & Exchange Visas</h4>
            <div className="flex flex-col gap-2">
              {studyVisas.map((v) => <VisaItem key={v.title} item={v} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
