import { motion } from 'framer-motion'

export default function CareerHero() {
  return (
    <section className="hero-gradient py-14 md:py-20 min-h-[240px] md:min-h-[300px] flex items-center">
      <div className="max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[26px] md:text-4xl lg:text-5xl font-semibold text-white mb-3"
        >
          Join Us in Making a Difference Through Law
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base text-zenmo-subheading max-w-xl mx-auto"
        >
          Build your career at Zenmo Law — where professional growth meets meaningful work
        </motion.p>
      </div>
    </section>
  )
}
