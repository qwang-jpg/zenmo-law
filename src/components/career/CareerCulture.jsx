import { motion } from 'framer-motion'

const cultureItems = [
  { title: 'Professionalism & Accountability', desc: 'Every legal matter is approached with compliance and risk management as the foremost priorities, with rigorous attention to factual analysis and sound legal judgment.' },
  { title: 'Communication & Collaboration', desc: 'We foster cross-functional collaboration and open communication, ensuring that all team members remain aligned and fully informed throughout the progression of each matter.' },
  { title: 'Stability & Long-Term Growth', desc: 'We value enduring professional relationships over short-term output, and are committed to providing team members with a sustainable, clearly defined career trajectory.' },
  { title: 'Respect for Diverse Backgrounds', desc: 'We serve clients from a wide range of cultural backgrounds and welcome professionals who bring cross-cultural communication skills and an international perspective.' },
]

export default function CareerCulture() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-body mb-10"
        >
          Zenmo Law is a full-service legal practice grounded in professional excellence and long-term client relationships. We focus on U.S. immigration law while also providing closely related business and personal legal support. We believe that exceptional legal service is built on a stable, collaborative, and accountable team. Whether you are an attorney, paralegal, or operations professional, we are committed to providing each team member with a clear career path, a professional environment in which to grow, and the opportunity to build experience that holds lasting value.
        </motion.p>

        <div className="bg-zenmo-light-bg rounded-xl p-6 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading mb-6"
          >
            How We Work & Our Team Culture
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cultureItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 flex items-start gap-4"
              >
                <div className="icon-framed-rounded border-zenmo-secondary/15 text-zenmo-secondary flex-shrink-0">
                  <span className="text-sm font-bold">0{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-zenmo-secondary mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-zenmo-text leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
