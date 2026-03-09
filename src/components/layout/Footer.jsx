import { Link } from 'react-router-dom'
import { assetUrl } from '@/lib/assetUrl'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { label: 'Career',               path: '/career' },
  { label: 'Privacy Policy',       path: '/privacy-policy' },
  { label: 'Legal Statement',      path: '/legal-statement' },
  { label: 'Attorney Advertising', path: '/attorney-advertising' },
]

export default function Footer() {
  return (
    <footer className="bg-zenmo-secondary" role="contentinfo">
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-0">

        {/* Main content */}
        <div className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <img
              src={assetUrl("/images/logos/Website-logo.png")}
              alt="Zenmo Law"
              className="h-8.5 w-auto max-w-[220px] brightness-0 invert opacity-85"
            />
            <p className="text-xs text-zenmo-footer-text/70 leading-relaxed max-w-[240px]">
              New York–based immigration & business law firm serving an international clientele.
            </p>
          </div>

          {/* Col 2 — Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Contact</h4>
            <a href="tel:+18006968608" className="flex items-center gap-2.5 text-zenmo-footer-text hover:text-white transition-colors group">
              <Phone size={13} strokeWidth={1.8} className="opacity-50 group-hover:opacity-100 flex-shrink-0" />
              <span className="text-sm">+1 (800) 696-8608</span>
            </a>
            <a href="mailto:contact@zenmolaw.com" className="flex items-center gap-2.5 text-zenmo-footer-text hover:text-white transition-colors group">
              <Mail size={13} strokeWidth={1.8} className="opacity-50 group-hover:opacity-100 flex-shrink-0" />
              <span className="text-sm">contact@zenmolaw.com</span>
            </a>
            <div className="flex items-start gap-2.5 text-zenmo-footer-text">
              <MapPin size={13} strokeWidth={1.8} className="opacity-50 flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-snug">747 3rd Ave, New York NY 10017</span>
            </div>
            <div className="flex items-center gap-2.5 text-zenmo-footer-text">
              <Clock size={13} strokeWidth={1.8} className="opacity-50 flex-shrink-0" />
              <span className="text-sm">Mon – Fri, 9:00 AM – 6:00 PM EST</span>
            </div>
          </div>

          {/* Col 3 — Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Quick Links</h4>
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-zenmo-footer-text hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-center gap-2">
          <p className="text-[11px] text-zenmo-footer-text/40">
            © 2026 Global Focus Law Group PLLC DBA Zenmo Law. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
