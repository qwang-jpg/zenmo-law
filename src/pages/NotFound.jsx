import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, FileX } from 'lucide-react'
import { useSEO } from '@/hooks/useSEO'

export default function NotFound() {
  useSEO({ noIndex: true })

  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-5 py-20">
      <div className="text-center max-w-lg mx-auto">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-zenmo-btn1/15 text-zenmo-btn1">
            <FileX size={36} strokeWidth={1.4} />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white/10 leading-none mb-4 select-none"
        >
          404
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-zenmo-subheading leading-relaxed mb-10"
        >
          The page you are looking for does not exist or may have been moved.
          If you believe this is an error, please contact us directly.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-zenmo-btn1 hover:bg-zenmo-btn2 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 group"
          >
            Back to Home
            <ArrowRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
