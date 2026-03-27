import { useEffect } from 'react'

const BASE_URL = 'https://zenmolaw.com'
const SITE_NAME = 'Zenmo Law'
const SITE_FULL_NAME = 'Zenmo Law | Global Focus Law Group PLLC'
const DEFAULT_LOCALE = 'en_US'
const DEFAULT_OG_IMAGE = '/images/logos/og-image.jpg'

// ─────────────────────────────────────────────────────────────
// Per-page SEO config
// noIndex: true → adds <meta name="robots" content="noindex,nofollow">
//                  and skips OG / Twitter / canonical / keywords
// ─────────────────────────────────────────────────────────────
export const PAGE_SEO = {
  home: {
    title: 'New York Immigration & Business Law Firm',
    description:
      'Zenmo Law is a New York–based immigration and business law firm serving individuals and companies. We provide expert legal support for H-1B, EB-1, EB-2 NIW, green cards, LLC formation, contracts, and more.',
    canonical: '/',
    keywords: [
      'New York immigration lawyer',
      'US immigration law firm',
      'H-1B visa attorney',
      'green card lawyer New York',
      'EB-2 NIW attorney',
      'business law New York',
      'Zenmo Law',
      'Global Focus Law Group',
    ],
  },
  about: {
    title: 'About Us — New York Immigration & Business Law',
    description:
      'Zenmo Law is a full-service U.S. law firm based in Midtown Manhattan, specializing in immigration, business, and personal legal matters for an international clientele. Learn about our mission and practice standards.',
    canonical: '/about-us',
    keywords: [
      'about Zenmo Law',
      'New York immigration law firm',
      'Global Focus Law Group PLLC',
      'immigration attorney New York',
      'international law firm New York',
    ],
  },
  immigration: {
    title: 'U.S. Immigration Law Services — H-1B, Green Card, EB-1, EB-2 NIW',
    description:
      'Comprehensive U.S. immigration legal services including H-1B, L-1, O-1, EB-1A, EB-1B, EB-2 NIW, EB-5, family-based green cards, OPT/STEM OPT, and I-485 adjustment of status. Serving individuals and employers in New York.',
    canonical: '/immigration-law',
    keywords: [
      'H-1B visa attorney New York',
      'EB-2 NIW lawyer',
      'EB-1A extraordinary ability',
      'green card application attorney',
      'O-1 visa lawyer',
      'L-1 visa attorney',
      'EB-5 investor visa',
      'STEM OPT attorney',
      'I-485 adjustment of status',
      'US immigration lawyer',
    ],
  },
  business: {
    title: 'Business Law Services — LLC Formation, Contracts & Trademark',
    description:
      'Zenmo Law provides business legal services including LLC and C-Corp formation, contract drafting and review, trademark registration, and compliance advisory for companies operating in the United States.',
    canonical: '/business-law',
    keywords: [
      'LLC formation New York',
      'business lawyer New York',
      'contract drafting attorney',
      'trademark registration New York',
      'US company formation lawyer',
      'corporate compliance attorney',
      'cross-border business law',
    ],
  },
  individual: {
    title: 'Individual Legal Services — Traffic, Civil Disputes & Personal Injury',
    description:
      'Personal legal services for individuals in New York including traffic violation defense, civil dispute representation, and personal injury claims. Zenmo Law helps you protect your rights in the United States.',
    canonical: '/individual-law',
    keywords: [
      'traffic ticket attorney New York',
      'personal injury lawyer New York',
      'civil dispute attorney',
      'speeding ticket defense New York',
      'individual legal services New York',
    ],
  },
  contact: {
    title: 'Contact Us — Free Consultation',
    description:
      'Contact Zenmo Law for a free legal consultation. Reach our New York office by phone at +1 (800) 696-8608, by email at contact@zenmolaw.com, or visit us at 747 3rd Ave, New York, NY 10017.',
    canonical: '/contact',
    keywords: [
      'contact Zenmo Law',
      'immigration lawyer consultation New York',
      'free legal consultation New York',
      'law firm New York contact',
    ],
  },
  // ── No-index pages ───────────────────────────────────────────
  career:               { noIndex: true },
  privacy:              { noIndex: true },
  legal:                { noIndex: true },
  attorneyAdvertising:  { noIndex: true },
  portal:               { noIndex: true },
}

// ─────────────────────────────────────────────────────────────
// useSEO hook
// ─────────────────────────────────────────────────────────────
export function useSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  locale = DEFAULT_LOCALE,
  keywords = [],
  noIndex = false,
} = {}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : SITE_FULL_NAME

    // ── <title> ────────────────────────────────────────────────
    document.title = fullTitle

    // ── Helper: upsert <meta> ──────────────────────────────────
    const setMeta = (selector, attrName, attrValue, content) => {
      if (!content) return
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // ── Helper: upsert <link> ──────────────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Helper: remove <meta> if exists ───────────────────────
    const removeMeta = (selector) => {
      const el = document.querySelector(selector)
      if (el) el.remove()
    }

    // ── No-index pages: robots + clean up SEO tags ─────────────
    if (noIndex) {
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow')
      // 🔴 Fix: renamed from `canonical` to `canonicalEl` to avoid
      //    shadowing the `canonical` parameter in the outer scope
      const canonicalEl = document.querySelector('link[rel="canonical"]')
      if (canonicalEl) canonicalEl.remove()
      return
    }

    // ── Remove noindex if navigating away from a noindex page ──
    removeMeta('meta[name="robots"]')

    const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL
    const ogImageUrl   = `${BASE_URL}${ogImage}`

    // ── Standard meta ──────────────────────────────────────────
    setMeta('meta[name="description"]', 'name', 'description', description)
    if (keywords.length) {
      setMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '))
    }

    // ── Canonical ──────────────────────────────────────────────
    setLink('canonical', canonicalUrl)

    // ── Open Graph ─────────────────────────────────────────────
    setMeta('meta[property="og:title"]',       'property', 'og:title',       fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]',         'property', 'og:url',         canonicalUrl)
    setMeta('meta[property="og:type"]',        'property', 'og:type',        ogType)
    setMeta('meta[property="og:image"]',       'property', 'og:image',       ogImageUrl)
    setMeta('meta[property="og:locale"]',      'property', 'og:locale',      locale)
    setMeta('meta[property="og:site_name"]',   'property', 'og:site_name',   SITE_FULL_NAME)

    // ── Twitter Card ───────────────────────────────────────────
    setMeta('meta[name="twitter:card"]',        'name', 'twitter:card',        'summary_large_image')
    setMeta('meta[name="twitter:title"]',       'name', 'twitter:title',       fullTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]',       'name', 'twitter:image',       ogImageUrl)

  }, [title, description, canonical, ogImage, ogType, locale, keywords, noIndex])
}
