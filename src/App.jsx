import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'

// Pages
import Home                from '@/pages/Home'
import AboutUs             from '@/pages/AboutUs'
import ImmigrationLaw      from '@/pages/ImmigrationLaw'
import BusinessLaw         from '@/pages/BusinessLaw'
import IndividualLaw       from '@/pages/IndividualLaw'
import Career              from '@/pages/Career'
import Contact             from '@/pages/Contact'
import Portal              from '@/pages/Portal'
import PrivacyPolicy       from '@/pages/PrivacyPolicy'
import LegalStatement      from '@/pages/LegalStatement'
import AttorneyAdvertising from '@/pages/AttorneyAdvertising'
import NotFound            from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/"                     element={<Home />} />
          <Route path="/about-us"             element={<AboutUs />} />
          <Route path="/immigration-law"      element={<ImmigrationLaw />} />
          <Route path="/business-law"         element={<BusinessLaw />} />
          <Route path="/individual-law"       element={<IndividualLaw />} />
          <Route path="/career"               element={<Career />} />
          <Route path="/contact"              element={<Contact />} />
          <Route path="/portal"               element={<Portal />} />
          <Route path="/privacy-policy"       element={<PrivacyPolicy />} />
          <Route path="/legal-statement"      element={<LegalStatement />} />
          <Route path="/attorney-advertising" element={<AttorneyAdvertising />} />
          <Route path="*"                     element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
