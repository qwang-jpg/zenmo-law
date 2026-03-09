import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'

export default function AboutCompliance() {
  return (
    <section className="bg-zenmo-light-bg py-12 md:py-16">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 px-8 md:px-12 py-10 md:py-12"
          style={{ boxShadow: '0 2px 16px rgba(15,23,42,0.05)' }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(79,71,230,0.08)', color: '#4F47E6' }}
            >
              <Scale size={22} strokeWidth={1.6} />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-zenmo-secondary leading-snug">
              Professional Responsibility & Compliance Commitment
            </h2>
          </div>

          <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: 'rgba(79,71,230,0.3)' }} />

          <p className="text-sm md:text-base text-zenmo-text leading-relaxed">
            Zenmo Law strictly adheres to the Rules of Professional Conduct and all applicable laws and regulations governing the practice of law in the United States. All legal services are provided or supervised by licensed attorneys operating within a fully compliant framework. We do not guarantee or warrant any particular outcome in any matter. All legal opinions and advice are rendered as professional judgments based on the specific facts of each case, applicable law, and the prevailing regulatory environment. Zenmo Law is committed to advising clients in a manner that is candid, prudent, and consistent with the highest standards of professional responsibility — ensuring that clients make informed decisions with a clear understanding of both the possibilities and the risks involved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
