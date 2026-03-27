import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowRight, User, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const LOGIN_TYPES = {
  individual: {
    label: 'Individual',
    icon: User,
    heading: 'Client Portal\nSecure Access',
    desc: 'Log in to view your case progress, upload documents, and stay in contact with your legal team.',
    userLabel: 'Username / Email',
    userPlaceholder: 'Enter your username or email',
    accent: '#4F47E6',   // zenmo-btn1
    accentLight: 'rgba(79,71,230,0.15)',
  },
  employer: {
    label: 'Employer',
    icon: Building2,
    heading: 'Employer Portal\nCase Management',
    desc: 'Access your corporate account to manage employee petitions, track visa cases, and coordinate with our immigration team.',
    userLabel: 'Corporate Email',
    userPlaceholder: 'Enter your corporate email',
    accent: '#2563EB',   // zenmo-business-btn
    accentLight: 'rgba(37,99,235,0.15)',
  },
}

export default function PortalLogin() {
  const [loginType, setLoginType]     = useState('individual')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe]   = useState(false)
  const [formData, setFormData]       = useState({ username: '', password: '' })
  const [loading, setLoading]         = useState(false)

  const config = LOGIN_TYPES[loginType]

  const handleTypeSwitch = (type) => {
    if (type === loginType) return
    setLoginType(type)
    setFormData({ username: '', password: '' })
    setShowPassword(false)
  }

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
  }

  return (
    <section className="min-h-[88vh] flex items-center justify-center py-16 px-5 bg-zenmo-light-bg">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row"
          style={{ boxShadow: '0 4px 40px rgba(15,23,42,0.08)' }}
        >

          {/* ── Left Brand Panel ── */}
          <motion.div
            key={loginType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="hidden md:flex md:w-5/12 flex-col justify-between p-10"
            style={{ background: 'linear-gradient(160deg, #1a0c3d 0%, #0F172A 100%)' }}
          >
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-10">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: config.accentLight }}
                >
                  <div className="w-3 h-3 rounded-sm bg-white/90" />
                </div>
                <span className="text-white font-semibold text-sm tracking-wide">Zenmo Law</span>
              </div>

              {/* Type badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5 text-xs font-medium"
                style={{ backgroundColor: config.accentLight, color: loginType === 'employer' ? '#93C5FD' : '#A5B4FC' }}
              >
                <config.icon size={12} strokeWidth={2} />
                {config.label} Login
              </div>

              <h2 className="text-white text-2xl font-bold leading-snug mb-3 whitespace-pre-line">
                {config.heading}
              </h2>
              <p className="text-zenmo-subheading text-sm leading-relaxed">
                {config.desc}
              </p>
            </div>

            {/* Footer note */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-white/40 leading-relaxed">
                This portal is for existing clients only. To inquire about a new matter, please reach out through our{' '}
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors underline underline-offset-2">
                  Contact page
                </Link>.
              </p>
            </div>
          </motion.div>

          {/* ── Right Login Form ── */}
          <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">

            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-zenmo-secondary mb-1.5">Sign In</h1>
              <p className="text-sm text-zenmo-desc-gray">Select your account type to continue</p>
            </div>

            {/* ── Login Type Toggle ── */}
            <div className="flex gap-2 p-1 bg-zenmo-light-bg rounded-xl mb-7 border border-gray-100">
              {Object.entries(LOGIN_TYPES).map(([key, cfg]) => {
                const isActive = loginType === key
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleTypeSwitch(key)}
                    className="relative flex-1 flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: isActive ? '#fff' : '#94A3B8',
                    }}
                  >
                    {/* Active pill */}
                    {isActive && (
                      <motion.div
                        layoutId="login-type-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ backgroundColor: cfg.accent }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative flex items-center gap-1.5">
                      <cfg.icon size={14} strokeWidth={2} />
                      {cfg.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* ── Form ── */}
            <AnimatePresence mode="wait">
              <motion.form
                key={loginType}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Username / Email */}
                <div className="space-y-1.5">
                  <label htmlFor="username" className="text-sm font-medium text-zenmo-secondary block">
                    {config.userLabel}
                  </label>
                  <div className="relative">
                    <Mail
                      size={15}
                      strokeWidth={1.8}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zenmo-desc-gray"
                    />
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder={config.userPlaceholder}
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 text-sm text-zenmo-secondary placeholder:text-zenmo-desc-gray bg-zenmo-light-bg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': config.accent + '4D' }}
                      onFocus={e => {
                        e.target.style.borderColor = config.accent
                        e.target.style.boxShadow = `0 0 0 3px ${config.accent}22`
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = '#E5E7EB'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label htmlFor="password" className="text-sm font-medium text-zenmo-secondary block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={15}
                      strokeWidth={1.8}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zenmo-desc-gray"
                    />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full h-12 pl-10 pr-11 rounded-xl border border-gray-200 text-sm text-zenmo-secondary placeholder:text-zenmo-desc-gray bg-zenmo-light-bg focus:outline-none transition-all"
                      onFocus={e => {
                        e.target.style.borderColor = config.accent
                        e.target.style.boxShadow = `0 0 0 3px ${config.accent}22`
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = '#E5E7EB'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zenmo-desc-gray hover:text-zenmo-secondary transition-colors"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword
                        ? <EyeOff size={15} strokeWidth={1.8} />
                        : <Eye size={15} strokeWidth={1.8} />
                      }
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center gap-2.5">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                    style={{ accentColor: config.accent }}
                  />
                  <label htmlFor="remember" className="text-sm text-zenmo-text cursor-pointer select-none">
                    Keep me signed in
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 disabled:opacity-60 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:opacity-90 group mt-1"
                  style={{ backgroundColor: config.accent }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    <>
                      Sign In as {config.label}
                      <ArrowRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </motion.form>
            </AnimatePresence>

            <p className="mt-8 text-center text-xs text-zenmo-desc-gray">
              Need to request portal access?{' '}
              <Link to="/contact" className="font-medium hover:underline" style={{ color: config.accent }}>
                Contact our team
              </Link>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
