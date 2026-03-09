import { useState, useEffect } from 'react'
import { assetUrl } from '@/lib/assetUrl'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'

const topBarItems = [
  { icon: 'weixin', text: 'ZENMOLAW' },
  { icon: 'phone', text: '+1 (800) 696 - 8608' },
  { icon: 'email', text: 'Contact@zenmolaw.com' },
  { icon: 'clock', text: 'Mon - Fri: 9:00 - 18:00 EST' },
]

const navItems = [
  { label: 'About Us', path: '/about-us' },
  { label: 'Immigration Law', path: '/immigration-law' },
  { label: 'Business Law', path: '/business-law' },
  { label: 'Individual Law', path: '/individual-law' },
  { label: 'Contact', path: '/contact' },
]

function TopBarIcon({ type }) {
  const iconMap = {
    weixin: (
      <svg viewBox="0 0 576 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-3.8-13-5.9-26.8-5.9-41.2 0-90.5 77.7-153.6 164-153.6zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.5 0-29-9.7-29-24.2 0-14.7 14.5-24.4 29-24.4zm-136.4 48.6c-14.5 0-29-9.7-29-24.2 0-14.7 14.5-24.4 29-24.4 14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-4.8 58.1-9.7l53.4 29-14.5-48.8C542.7 399.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3 0 9.9-9.7 19.6-24.2 19.6zm136.4 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.2 9.7 24.2 19.3 0 9.9-9.7 19.6-24.2 19.6z"/>
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
      </svg>
    ),
    email: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
      </svg>
    ),
    language: (
      <svg viewBox="0 0 640 512" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.3 69.1 8.4 6.6 17.4 12.5 26.6 17.5 6.1 3.3 8.4 10.8 5.1 16.9l-7.5 13.5c-3.3 5.9-10.5 8.2-16.5 5.1-12-5.9-23-13.2-33.1-21.6-10.1 8.4-21.1 15.7-33.1 21.6-5.9 3.1-13.2.8-16.5-5.1l-7.5-13.5c-3.3-6.1-1-13.6 5.1-16.9 9.2-5 18.2-10.9 26.6-17.5-14.4-14.8-25.7-31.7-34.2-49.6h-16.7c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h56v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h56c6.6 0 12 5.4 12 12zM536 256h-30c6.6 13.8 15.5 27.2 26.5 39.6 5-5.5 9.5-11.3 13.6-17.5 5-7.8 8.2-15.4 9.9-22.1H536zM320 384V96H24C10.7 96 0 106.7 0 120v256c0 13.3 10.7 24 24 24h296zm-77.5-64.1L224 258.2h-64.1l-18.5 61.7c-1.5 5.1-6.2 8.6-11.5 8.6H112c-7.7 0-13.1-7.5-10.9-14.9l58-194.3c1.4-4.7 5.7-7.9 10.6-8h31.7c4.9.1 9.2 3.3 10.6 8l58.4 194.3c2.3 7.4-3.1 14.9-10.9 14.9h-18c-5.3 0-10-3.5-11.5-8.6z"/>
      </svg>
    ),
  }
  return iconMap[type] || null
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isPortal = location.pathname === '/portal'

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-zenmo-topbar w-full">
        <div className="max-w-content mx-auto flex items-center justify-between px-4 md:px-8 lg:px-0 min-h-[40px]">
          <div className="flex items-center gap-6 lg:gap-8">
            {topBarItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-zenmo-subheading">
                <TopBarIcon type={item.icon} />
                <span className="text-xs font-arial">{item.text}</span>
              </div>
            ))}
          </div>
          <a
            href="https://zh.zenmolaw.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zenmo-subheading hover:text-white transition-colors"
          >
            <TopBarIcon type="language" />
            <span className="text-xs font-arial">中文</span>
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 z-50 bg-white w-full" style={{ boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)' }}>
        <nav
          className="max-w-content mx-auto flex items-center justify-between px-4 md:px-8 lg:px-0 min-h-[70px]"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Zenmo Law Home">
            <img
              src={assetUrl("/images/logos/Website-logo.png")}
              alt="Zenmo Law"
              className="h-9 md:h-10 w-auto"
              width="160"
              height="40"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[30px]">
            {navItems.map((item) => (
              item.disabled ? (
                <span
                  key={item.path}
                  className="text-base font-arial font-semibold capitalize text-zenmo-text cursor-default opacity-40"
                  aria-disabled="true"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-arial font-semibold capitalize transition-colors duration-200 hover:text-zenmo-btn1 relative ${
                    location.pathname === item.path || location.pathname.startsWith(item.path + '/')
                      ? 'text-zenmo-btn1'
                      : 'text-zenmo-text'
                  }`}
                >
                  {item.label}
                  {(location.pathname === item.path || location.pathname.startsWith(item.path + '/')) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-zenmo-btn1 rounded-full" />
                  )}
                </Link>
              )
            ))}

            <Link
              to="/portal"
              className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 ${
                isPortal
                  ? 'bg-zenmo-btn1 text-white border-zenmo-btn1'
                  : 'border-zenmo-btn1/30 text-zenmo-btn1 hover:bg-zenmo-btn1 hover:text-white hover:border-zenmo-btn1'
              }`}
            >
              <LogIn size={14} strokeWidth={2} />
              Client Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-zenmo-hamburger p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[440px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ boxShadow: mobileMenuOpen ? '0 8px 24px rgba(0,0,0,0.08)' : 'none' }}
        >
          <nav className="flex flex-col py-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              item.disabled ? (
                <span
                  key={item.path}
                  className="px-6 py-3.5 text-zenmo-secondary font-medium opacity-40 cursor-default"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-3.5 text-zenmo-secondary font-medium transition-colors hover:bg-zenmo-light-bg ${
                    location.pathname === item.path ? 'bg-zenmo-light-bg text-zenmo-btn1' : ''
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}

            <div className="px-6 py-3">
              <Link
                to="/portal"
                className={`flex items-center gap-2 w-full justify-center py-3 rounded-lg text-sm font-semibold transition-colors ${
                  isPortal
                    ? 'bg-zenmo-btn1 text-white'
                    : 'border border-zenmo-btn1/30 text-zenmo-btn1 hover:bg-zenmo-btn1 hover:text-white'
                }`}
              >
                <LogIn size={14} strokeWidth={2} />
                Client Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
