import { motion } from 'framer-motion'
import SubpageHero from '@/components/shared/SubpageHero'

export default function LegalStatementContent() {
  return (
    <>
      <SubpageHero title="Legal Statement" centered={true} />
      <section className="py-12 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-base text-zenmo-text leading-relaxed space-y-4"
          >
            <p>
              The information provided on this website does not constitute, and is not intended to constitute, legal advice of any kind. Accessing or using this website, or relying on any information contained herein, does not create and should not be construed as creating an attorney-client relationship. This website is intended solely as a general informational resource to provide the public with basic information on legal topics.
            </p>
            <p>
              While Zenmo Law endeavors to ensure that the information on this website is accurate and current, we make no express or implied representations or warranties as to its completeness, accuracy, or timeliness. Visitors should not act or refrain from acting on the basis of any information contained on this website alone. Before making any decision, you should seek appropriate professional advice from a licensed attorney or other qualified professional in the relevant jurisdiction with respect to your specific circumstances.
            </p>
            <p>
              To the fullest extent permitted by applicable law, Zenmo Law expressly disclaims all liability for any direct or indirect loss, damage, or consequence arising from any action taken or not taken in reliance on, or in the absence of reliance on, the content of this website.
            </p>
            <h3 className="text-xl font-semibold text-zenmo-secondary pt-4">Third-Party Links & External Websites</h3>
            <p>
              Unless expressly stated otherwise, any links to third-party websites contained on this website are provided solely for the convenience of visitors as potentially useful reference resources, and do not constitute or imply an endorsement, sponsorship, or affiliation by Zenmo Law with respect to any such third party, its website, or its content or services. Zenmo Law assumes no responsibility for the content, accuracy, or legality of any third-party website. Any risk or consequence arising from accessing a third-party website is borne solely by the visitor.
            </p>
            <p>
              If you have any questions regarding the content of this website or this Legal Statement, please do not hesitate to reach out through our Contact page.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
