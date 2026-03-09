import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

const ipItems = [
  { title: 'Trademark Registration', desc: 'The first step in brand protection — establishing and securing trademark rights' },
  { title: 'Copyright Registration', desc: 'Protecting original works, including software, written content, and artistic creations' },
  { title: 'Patent Applications', desc: 'Protecting inventions and innovations to build a defensible technological advantage' },
]

export default function IPSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="icon-framed-rounded" style={{ backgroundColor: '#0DB7BD', borderColor: '#0DB7BD', color: '#FFFFFF' }}>
            <Lightbulb size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading">Intellectual Property Protection</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-body mb-6"
        >
          For businesses operating in the U.S. market, legal protection of brand assets and creative works is essential. We assist clients in building foundational intellectual property protection structures and provide legal assessments of potential infringement risks.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {ipItems.map((item) => (
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
