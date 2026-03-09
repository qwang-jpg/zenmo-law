import { motion } from 'framer-motion'
import { HeartPulse } from 'lucide-react'

const items = [
  { title: 'Motor Vehicle Accidents', desc: 'Personal injury claims arising from automobile collisions' },
  { title: 'Workplace Injuries', desc: "Workers' compensation claims for on-the-job accidents" },
  { title: 'Slip & Fall Accidents', desc: 'Personal injury claims for accidents in public or private premises' },
  { title: 'Medical Malpractice', desc: 'Damages claims arising from negligent medical care' },
]

export default function InjurySection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#7860F3', borderColor: '#7860F3', color: '#FFFFFF' }}>
            <HeartPulse size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Personal Injury</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          We provide legal assistance to individuals injured due to the negligence of others, helping clients pursue the compensation they are entitled to — including medical expenses, lost wages, and other recoverable damages.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((item) => (
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
