import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PortalLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)

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
          <div
            className="hidden md:flex md:w-5/12 flex-col justify-between p-10"
            style={{ background: 'linear-gradient(160deg, #1a0c3d 0%, #0F172A 100%)' }}
          >
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-10">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(126,61,237,0.3)' }}
                >
                  <div className="w-3 h-3 rounded-sm bg-white/90" />
                </div>
                <span className="text-white font-semibold text-sm tracking-wide">Zenmo Law</span>
              </div>

              <h2 className="text-white text-2xl font-bold leading-snug mb-3">
                Client Portal<br />Secure Access
              </h2>
              <p className="text-zenmo-subheading text-sm leading-relaxed">
                Log in to view your case progress, upload documents, and stay in contact with your legal team.
              </p>
            </div>

            {/* Footer note */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-white/40 leading-relaxed">
                This portal is for existing clients only. To inquire about a new matter, please reach out through our
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors ml-1 underline underline-offset-2">
                  Contact page
                </Link>.
              </p>
            </div>
          </div>

          {/* ── Right Login Form ── */}
          <div className="flex-1 p-8 sm:p-10 flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-zenmo-secondary mb-1.5">Sign In</h1>
              <p className="text-sm text-zenmo-desc-gray">Enter your username or email address to continue</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Username */}
              <div className="space-y-1.5">
                <label htmlFor="username" className="text-sm font-medium text-zenmo-secondary block">
                  Username / Email
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
                    placeholder="Enter your username or email"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full h-12 pl-10 pr-4 rounded-xl border border-gray-200 text-sm text-zenmo-secondary placeholder:text-zenmo-desc-gray bg-zenmo-light-bg focus:outline-none focus:ring-2 focus:ring-zenmo-btn2/30 focus:border-zenmo-btn2 transition-all"
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
                    className="w-full h-12 pl-10 pr-11 rounded-xl border border-gray-200 text-sm text-zenmo-secondary placeholder:text-zenmo-desc-gray bg-zenmo-light-bg focus:outline-none focus:ring-2 focus:ring-zenmo-btn2/30 focus:border-zenmo-btn2 transition-all"
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
                  className="w-4 h-4 rounded border-gray-300 accent-zenmo-btn2 cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm text-zenmo-text cursor-pointer select-none">
                  Keep me signed in
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-zenmo-btn1 hover:bg-zenmo-btn1/90 disabled:opacity-60 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg group mt-1"
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
                    Sign In
                    <ArrowRight size={15} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-xs text-zenmo-desc-gray">
              Need to request portal access?
              <Link to="/contact" className="text-zenmo-btn2 font-medium hover:underline ml-1">
                Contact our team
              </Link>
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
