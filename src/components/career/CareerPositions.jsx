import { motion } from 'framer-motion'

export default function CareerPositions() {
  return (
    <>
      {/* Current Openings */}
      <section className="pb-12 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-5"
          >
            Current Openings
          </motion.h2>
          <div className="bg-zenmo-light-bg rounded-xl p-5 md:p-6">
            <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary mb-2">No open positions at this time</h4>
            <p className="text-xs md:text-sm text-zenmo-text leading-relaxed">
              If you would like to be considered when future opportunities become available, we welcome you to send your résumé to our recruiting inbox. We will add your profile to our talent pipeline and reach out when a suitable position opens.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply & Equal Opportunity */}
      <section className="bg-zenmo-light-bg py-12 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-5"
          >
            How to Apply
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-body"
          >
            Equal Employment Opportunity Statement: Zenmo Law is an equal opportunity employer. We do not discriminate against any candidate on the basis of race, gender, national origin, religion, marital status, or any other characteristic protected by applicable law. We are committed to fostering an inclusive, respectful, and professional work environment for all. please send your resume to hr@zenmolaw.com
          </motion.p>
        </div>
      </section>
    </>
  )
}
