import { motion } from 'framer-motion'
import { ShieldCheck, MessageCircle, GitMerge, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.7} />,
    color: '#4F47E6',
    bg: 'rgba(79,71,230,0.08)',
    title: 'Compliance-First Practice Standards',
    desc: 'Every legal opinion is grounded in the specific facts of each matter, informed by professional experience and applicable law.',
  },
  {
    icon: <MessageCircle size={22} strokeWidth={1.7} />,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    title: 'Clear & Transparent Communication',
    desc: 'We proactively update clients at key milestones, minimizing information gaps and the uncertainty they create.',
  },
  {
    icon: <GitMerge size={22} strokeWidth={1.7} />,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: 'Cross-Practice Coordination',
    desc: 'Immigration, business, and individual matters are handled with shared context — so nothing falls through the cracks.',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.7} />,
    color: '#0891B2',
    bg: 'rgba(8,145,178,0.08)',
    title: 'Long-Term Legal Planning',
    desc: 'We focus on lasting outcomes: stable immigration status, business compliance, and continued personal development.',
  },
]

export default function WhyZenmo({ title = 'Why Zenmo Law' }) {
  return (
    <section className="border-t border-gray-100 py-14 md:py-20 bg-zenmo-light-bg">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-widest mb-3 text-zenmo-btn1">Why Choose Us</p>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle !mb-0">
            What sets our practice apart — in how we think, communicate, and how we deliver results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group bg-white rounded-2xl p-7 border border-gray-100 flex items-start gap-5 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zenmo-secondary mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
