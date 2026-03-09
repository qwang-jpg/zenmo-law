import { motion } from 'framer-motion'
import { Building2, CheckCircle2, Users } from 'lucide-react'

const capabilities = [
  {
    title: 'End-to-End Visa Management',
    desc: 'Full-cycle management of work visa applications, renewals, and employer transfers for foreign national employees, covering H-1B, L-1, O-1, TN, and other major work visa categories',
  },
  {
    title: 'Employer-Sponsored Green Cards',
    desc: 'Strategic planning and case management for employer-sponsored permanent residence applications, including PERM labor certification, EB-2, and EB-3',
  },
  {
    title: 'Status Tracking & Deadline Alerts',
    desc: 'Ongoing monitoring of employee immigration status with proactive alerts ahead of expiration dates to prevent lapses in authorized status',
  },
  {
    title: 'Pre-Offer Visa Feasibility Assessment',
    desc: 'Helping HR teams evaluate a candidate\'s visa pathway and timeline before extending an offer, reducing uncertainty in the hiring process',
  },
  {
    title: 'Policy Update Notifications',
    desc: 'Timely alerts on changes in immigration law and policy, with analysis of their practical impact on current foreign national employees',
  },
]

const collaboration = [
  {
    title: 'Direct Access for Ongoing Consultation',
    desc: 'Serving as an on-call immigration compliance resource for HR and legal teams, available to address questions as they arise',
  },
  {
    title: 'Regular Status Reviews',
    desc: 'Periodic reviews of the immigration status and upcoming renewal milestones for all foreign national employees, keeping your team fully informed',
  },
  {
    title: 'Forward-Looking Immigration Strategy',
    desc: 'Providing proactive immigration strategy recommendations informed by your company\'s workforce structure and growth plans',
  },
]

export default function EmployerSection() {
  return (
    <section
      className="py-12 md:py-20"
      style={{ background: 'linear-gradient(330deg, #471F8B 0%, #11192C 100%)' }}
    >
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div
            className="icon-framed-rounded"
            style={{ backgroundColor: '#7661F3', borderColor: '#7661F3', color: '#FFFFFF' }}
          >
            <Building2 size={18} strokeWidth={1.8} />
          </div>
          <h2 className="section-heading text-white">Corporate Immigration Legal Services</h2>
        </motion.div>

        {/* Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-zenmo-subheading leading-relaxed max-w-6xl mb-10 md:mb-12"
        >
          For companies without in-house immigration counsel, managing the immigration compliance of foreign national employees often falls to HR — creating risk of missed deadlines and compliance gaps. Zenmo Law can serve as your company's external immigration legal team, systematically managing the full employment lifecycle of your foreign national workforce so your HR team can focus on core people operations.
        </motion.p>

        {/* Two-column content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {/* Left: What We Can Do for Your Company */}
          <div
            className="rounded-2xl p-5 md:p-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <CheckCircle2 size={18} strokeWidth={1.8} className="text-[#7661F3] flex-shrink-0" />
              <h3 className="text-sm md:text-base font-semibold text-white">What We Can Do for Your Company</h3>
            </div>
            <div className="flex flex-col gap-4">
              {capabilities.map((item, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <span className="text-xs md:text-sm font-medium text-white/90">{item.title}</span>
                  <span className="text-xs text-zenmo-subheading/75 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: How We Work with Your Team */}
          <div
            className="rounded-2xl p-5 md:p-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <Users size={18} strokeWidth={1.8} className="text-[#7661F3] flex-shrink-0" />
              <h3 className="text-sm md:text-base font-semibold text-white">How We Work with Your Team</h3>
            </div>
            <div className="flex flex-col gap-4">
              {collaboration.map((item, index) => (
                <div key={index} className="flex flex-col gap-0.5">
                  <span className="text-xs md:text-sm font-medium text-white/90">{item.title}</span>
                  <span className="text-xs text-zenmo-subheading/75 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-xl p-4"
              style={{ backgroundColor: 'rgba(118,97,243,0.15)', border: '1px solid rgba(118,97,243,0.25)' }}
            >
              <p className="text-xs text-white/70 leading-relaxed">
                Regardless of your company's size, Zenmo Law can flexibly adapt the depth and scope of our engagement to match your foreign national headcount and hiring cadence.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
