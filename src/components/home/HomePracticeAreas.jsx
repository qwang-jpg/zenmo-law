import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Briefcase, User } from 'lucide-react'

const immigrationTags = ['H-1B · L-1 · O-1', 'EB-1A/B/C', 'EB-2/3 · NIW' , 'Family Green Card' , 'EB-5 Investor', 'Other Visa & Green Card']

const secondary = [
  {
    icon: <Briefcase size={18} strokeWidth={1.8} />,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    title: 'Business Law',
    desc: 'Entity formation, contract drafting, trademark registration, and ongoing compliance support for U.S.-based businesses.',
    link: '/business-law',
  },
  {
    icon: <User size={18} strokeWidth={1.8} />,
    color: '#0891B2',
    bg: 'rgba(8,145,178,0.08)',
    title: 'Individual Legal Services',
    desc: 'Traffic violations, civil disputes, and personal injury claims — protecting your rights as an individual in the United States.',
    link: '/individual-law',
  },
]

export default function HomePracticeAreas() {
  return (
    <section className="bg-zenmo-light-bg py-16 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Practice Areas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="section-subtitle !mb-10"
        >
          Full-spectrum legal support across immigration, business, and personal matters
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* ── Primary: Immigration Law (3/5 width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col"
            style={{ boxShadow: '0 2px 16px rgba(15,23,42,0.06)' }}
          >
            {/* Accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #7C3AED, #4F47E6)' }} />

            <div className="p-8 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(124,58,237,0.1)', color: '#7C3AED' }}>
                  <Globe size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Primary Practice</p>
                  <h3 className="text-xl font-bold text-zenmo-secondary">Immigration Law</h3>
                </div>
              </div>

              <p className="text-sm text-zenmo-text leading-relaxed mb-6">
                As our core practice. We provide comprehensive U.S. immigration strategy — from initial work visa applications to long-term green card planning — backed by hands-on experience across every stage of the immigration process.
              </p>

              {/* Tags grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                {immigrationTags.map(tag => (
                  <div key={tag} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-gray-50 border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
                    <span className="text-xs text-zenmo-text font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link
                  to="/immigration-law"
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-md group"
                  style={{ backgroundColor: '#7C3AED' }}
                >
                  Explore Immigration Law
                  <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Secondary cards (2/5 width) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {secondary.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="group flex-1 bg-white rounded-2xl p-6 border border-gray-100 flex flex-col hover:shadow-md hover:border-gray-200 transition-all duration-300"
                style={{ boxShadow: '0 2px 12px rgba(15,23,42,0.04)' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: area.bg, color: area.color }}>
                    {area.icon}
                  </div>
                  <h3 className="text-base font-bold text-zenmo-secondary">{area.title}</h3>
                </div>

                <p className="text-sm text-zenmo-text leading-relaxed mb-5">{area.desc}</p>

                <div className="mt-auto">
                  <Link
                    to={area.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold group/link transition-colors"
                    style={{ color: area.color }}
                  >
                    Learn More
                    <ArrowRight size={13} strokeWidth={2.2} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
