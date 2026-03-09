import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section
      className="relative w-full flex items-center overflow-hidden min-h-[480px] md:min-h-[430px] lg:min-h-[600px]"
      aria-label="Homepage Banner"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/backgrounds/home-background.jpeg')})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.92) 0%, rgba(25,33,51,0.85) 50%, rgba(25,33,51,0.75) 100%)' }}
      />
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[26px] leading-[1.35] md:text-4xl lg:text-[50px] lg:leading-[1.2] font-semibold text-white mb-4 md:mb-6 w-full md:w-[85%] lg:w-2/3"
        >
         Visa to Permanent Residency and Everything in Between
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed mb-7 md:mb-8 w-full md:w-[85%] lg:w-1/2"
        >
          Whether you're applying for your first work visa, planning a path to permanent residency, or establishing a business in the U.S. — Zenmo Law provides structured legal guidance at every stage.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact" className="btn-primary group">
            Contact Us for a Free Consultation
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
