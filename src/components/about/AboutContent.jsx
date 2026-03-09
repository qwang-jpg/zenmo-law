import { motion } from 'framer-motion'
import { Globe2, Scale, TrendingUp, Users } from 'lucide-react'

const highlights = [
  {
    icon: <Globe2 size={18} strokeWidth={1.7} />,
    color: '#7C3AED',
    label: 'Core Practice',
    value: 'U.S. Immigration Law',
  },
  {
    icon: <Scale size={18} strokeWidth={1.7} />,
    color: '#2563EB',
    label: 'Standards',
    value: 'NY Rules of Professional Conduct',
  },
  {
    icon: <Users size={18} strokeWidth={1.7} />,
    color: '#0891B2',
    label: 'Clients',
    value: 'Individuals & Businesses',
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.7} />,
    color: '#4F47E6',
    label: 'Focus',
    value: 'Long-Term Legal Partnership',
  },
]

export default function AboutContent() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* ── Highlight strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 md:mb-16"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="flex items-center gap-3 px-4 py-4 rounded-xl border border-gray-100 bg-gray-50"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${h.color}12`, color: h.color }}
              >
                {h.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">{h.label}</p>
                <p className="text-xs font-semibold text-zenmo-secondary leading-snug">{h.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Main content: two columns ── */}
        <div className="flex flex-col lg:flex-row lg:gap-16">

          {/* Left — About */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 mb-12 lg:mb-0"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#4F47E6' }} />
              <h2 className="text-2xl md:text-3xl font-semibold text-zenmo-secondary">About Zenmo Law</h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-zenmo-text leading-relaxed mb-10">
              <p>
                Zenmo Law is a full-service law firm based in New York City, serving an international clientele with legal support across immigration, business, and personal matters. We are committed to delivering professional, principled, and results-oriented legal services that help individuals and businesses navigate the complexities of building a life or enterprise in the U.S.
              </p>
              <p>
                Our practice has developed deep expertise in U.S. immigration law — encompassing visa applications, green card planning, status adjustments, and a broad range of immigration programs. We also provide closely related services in corporate compliance, contract matters, and personal legal support, enabling clients to address their legal needs in a coordinated and forward-looking manner.
              </p>
              <p>
                Every engagement is handled within a structured, transparent, and efficient framework. We prioritize building enduring client relationships over transactional, one-off representations.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
              <h2 className="text-2xl md:text-3xl font-semibold text-zenmo-secondary">Our Mission</h2>
            </div>

            <div className="space-y-4 text-sm md:text-base text-zenmo-text leading-relaxed">
              <p>
                Zenmo Law's mission is to serve as a meaningful and enduring legal partner throughout our clients' long-term development. Through skilled representation and forward-thinking legal strategy, we help clients pursue stable, compliant, and sustainable growth as they navigate cross-border transitions.
              </p>
              <p>
                We look beyond the outcome of any single application or case — focusing on holistic pathway planning, proactive compliance risk management, and the long-term stability of our clients' immigration status and business structures.
              </p>
            </div>
          </motion.div>

          {/* Right — pull quote + office info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="lg:w-[340px] flex flex-col gap-5 flex-shrink-0"
          >
            {/* Pull quote */}
            <div
              className="rounded-2xl px-7 py-8"
              style={{ background: 'linear-gradient(150deg, #EEF0F8 0%, #E4E8F6 100%)' }}
            >
              <p className="text-[32px] leading-none text-zenmo-btn1 opacity-30 font-serif mb-3 select-none">"</p>
              <p className="text-base font-semibold text-zenmo-secondary leading-relaxed mb-4">
                Legal work is most effective when it is systematic, transparent, and genuinely oriented toward long-term outcomes.
              </p>
              <p className="text-xs text-zenmo-text/60 uppercase tracking-widest">— Zenmo Law</p>
            </div>

            {/* Office card */}
            <div className="rounded-2xl border border-gray-100 bg-white px-7 py-7"
              style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.05)' }}
            >
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Our Office</h4>
              <div className="space-y-3 text-sm text-zenmo-text">
                <p className="font-semibold text-zenmo-secondary">Zenmo Law</p>
                <p>747 3rd Ave, New York, NY 10017</p>
                <p>Mon – Fri &nbsp;·&nbsp; 9:00 AM – 6:00 PM EST</p>
                <div className="pt-1 border-t border-gray-100">
                  <a href="tel:+18006968608" className="text-zenmo-btn1 font-medium hover:underline">+1 (800) 696-8608</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
