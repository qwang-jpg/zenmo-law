import { motion } from 'framer-motion'
import SubpageHero from '@/components/shared/SubpageHero'

export default function AttorneyAdvertisingContent() {
  return (
    <>
      <SubpageHero title="Attorney Advertising" centered={true} />
      <section className="py-12 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-base text-zenmo-text leading-relaxed"
          >
            <p>
              This website may constitute attorney advertising under the laws or rules of professional conduct of certain jurisdictions. Prior results described or referenced on this website do not guarantee, warrant, or predict a similar outcome in any future matter. The result of any particular case depends upon the specific facts involved, the applicable law, and other relevant factors.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
