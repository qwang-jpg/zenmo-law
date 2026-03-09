import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({
  backgroundImage,
  tagline,
  description,
  buttonText,
  buttonLink,
  minHeight = '600px',
}) {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-zenmo-hero-overlay/90" />

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full px-4 md:px-8 lg:px-0 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[50px] lg:leading-tight font-semibold text-white mb-6"
          dangerouslySetInnerHTML={{ __html: tagline }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base text-zenmo-subheading max-w-3xl mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {buttonText && buttonLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to={buttonLink}
              className="btn-primary group"
            >
              {buttonText}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
