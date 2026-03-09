import { motion } from 'framer-motion'
import { Car } from 'lucide-react'

const items = [
  { title: 'Speeding Ticket Defense', desc: 'Professional case analysis to identify viable grounds for contesting the violation' },
  { title: 'Parking Ticket Appeals', desc: 'Assistance in reducing or dismissing unwarranted parking violations' },
  { title: 'Accident Liability Disputes', desc: 'Representation in disputes over fault determination following a traffic accident' },
{ title: "Driver's License Point Management", desc: 'Protecting your driving record and minimizing point accumulation' },
]

export default function TrafficSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#5073F3', borderColor: '#5073F3', color: '#FFFFFF' }}>
            <Car size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Traffic Violations</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          We assist clients in contesting a wide range of traffic violations — including speeding, parking infractions, and DUI — with the goal of minimizing the impact on driving record points and insurance premiums.
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
