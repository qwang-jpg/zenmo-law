import { motion } from 'framer-motion'
import { assetUrl } from '@/lib/assetUrl'

export default function BusinessHero() {
  return (
    <section className="relative w-full flex items-center overflow-hidden min-h-[460px] md:min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl('/images/backgrounds/business-background.jpg')})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(25,33,51,0.93) 0%, rgba(25,33,51,0.82) 100%)' }}
      />
      <div className="relative z-10 max-w-content mx-auto w-full px-5 md:px-8 lg:px-0 py-16 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[26px] leading-[1.3] md:text-[36px] lg:text-[46px] lg:leading-[1.2] font-semibold text-white mb-5 w-full md:w-[80%] lg:w-[55%]"
        >
          Compliance-Focused Legal Support for Your Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base font-normal text-zenmo-subheading leading-relaxed w-full md:w-[80%] lg:w-[55%]"
        >
          Operating a business in the U.S. involves multiple legal dimensions — entity formation, contractual relationships, intellectual property, and regulatory compliance. Zenmo Law provides systematic business legal support to help clients establish a solid compliance foundation and mitigate operational risk.
        </motion.p>
      </div>
    </section>
  )
}
