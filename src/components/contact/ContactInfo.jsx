import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactItems = [
  { label: 'Phone', value: '+1 (800) 696-8608', icon: <Phone size={18} strokeWidth={1.8} /> },
  { label: 'Email', value: 'contact@zenmolaw.com', icon: <Mail size={18} strokeWidth={1.8} /> },
  { label: 'Address', value: '747 3rd Ave, New York NY 10017', icon: <MapPin size={18} strokeWidth={1.8} /> },
  { label: 'Office Hours', value: 'Mon – Fri, 9:00 AM – 6:00 PM EST', icon: <Clock size={18} strokeWidth={1.8} /> },
]

export default function ContactInfo() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left — Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[42%] flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-zenmo-secondary mb-2">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-zenmo-text mb-8 leading-relaxed">
              Our team is available Monday through Friday. Reach out by phone, email, or visit us in Midtown Manhattan.
            </p>

            <div className="flex flex-col gap-3">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-4 bg-zenmo-light-bg rounded-xl px-5 py-4"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#EEF0FF', color: '#4F47E6' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-zenmo-desc-gray font-medium">
                      {item.label}
                    </span>
                    <p className="text-sm md:text-base text-zenmo-secondary font-medium leading-snug">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:w-[58%]"
          >
            <div className="w-full h-[340px] md:h-[480px] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(15,23,42,0.08)' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1838512684916!2d-73.97425808459418!3d40.75479794274672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe5d0e7c75%3A0x249fadd40208c45b!2s747%203rd%20Ave%2C%20New%20York%2C%20NY%2010017!5e0!3m2!1sen!2sus!4v1709000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zenmo Law Office Location"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
