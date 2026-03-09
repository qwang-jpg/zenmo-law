import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

export default function AboutHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[320px] md:min-h-[400px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${assetUrl('/images/backgrounds/En-about-us-background.jpeg')})`,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, rgba(25,33,51,0.93) 0%, rgba(25,33,51,0.82) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-12 md:py-20">
        <div className="w-full md:w-[85%] lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[28px] leading-[1.3] md:text-4xl lg:text-[50px] lg:leading-[1.2] font-semibold text-white mb-4 md:mb-6"
          >
            About Zenmo Law
          </motion.h2>
        </div>

        <div className="w-full md:w-[85%] lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed"
          >
            Based in Midtown Manhattan, Zenmo Law helps international clients navigate immigration, business compliance, and personal legal matters with clear strategy and long-term perspective.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
