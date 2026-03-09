import { motion } from 'framer-motion'

export default function SubpageHero({ title, subtitle, centered = true }) {
  return (
    <section className="hero-gradient py-16 md:py-20 min-h-[200px] md:min-h-[260px] flex items-center">
      <div className={`max-w-content mx-auto w-full px-4 md:px-8 lg:px-0 ${centered ? 'text-center' : ''}`}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`text-base md:text-lg text-zenmo-subheading leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
