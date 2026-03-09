import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({
  title = 'Ready to Take the Next Step?',
  description = 'Whether you are planning your path to the United States or are already studying, working, or running a business here, we can help you assess viable options and understand the risks — then move forward with clarity and a transparent process.',
  buttonText = 'Contact Us for a Free Consultation',
  buttonLink = '/contact',
}) {
  return (
    <section className="py-12 md:py-20 px-5 md:px-8 lg:px-0 bg-white border-t border-gray-100" aria-label="Contact Us">
      <div className="max-w-content mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="cta-gradient rounded-[16px] md:rounded-[20px] py-10 md:py-16 lg:py-20 px-6 md:px-16 lg:px-24 text-center"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 md:mb-10 max-w-5xl mx-auto">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 md:gap-3 bg-white text-zenmo-primary hover:bg-white/90 px-6 py-3 md:px-8 md:py-4 rounded-[10px] font-semibold transition-all duration-300 hover:shadow-lg group text-sm md:text-base"
          >
            {buttonText}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
