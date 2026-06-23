import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import HomePage from "@/pages/home";
import GlobalEntitySetupPage from "@/pages/global-entity-setup";
import ManagedAccountingBookkeepingPage from "@/pages/managed-accounting-bookkeeping";
import TaxComplianceAdvisoryPage from "@/pages/tax-compliance-advisory";
import BusinessAdvisoryPage from "@/pages/business-advisory";
import SupportToCPAsPage from "@/pages/support-to-cpas";
import AboutPage from "@/pages/about";
import FAQPage from "@/pages/faq";
import ContactPage from "@/pages/contact";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsPage from "@/pages/terms";
import SecurityCompliancePage from "@/pages/security-compliance";
import InformationSecurityPolicyPage from "@/pages/information-security-policy";
import PlaceholderPage from "@/pages/placeholder";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/services/global-entity-setup"
              element={<GlobalEntitySetupPage />}
            />
            <Route
              path="/services/managed-accounting-bookkeeping"
              element={<ManagedAccountingBookkeepingPage />}
            />
            <Route
              path="/services/tax-compliance-advisory"
              element={<TaxComplianceAdvisoryPage />}
            />
            <Route
              path="/services/business-advisory"
              element={<BusinessAdvisoryPage />}
            />
            <Route
              path="/services/support-to-cpas"
              element={<SupportToCPAsPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insights" element={<PlaceholderPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route
              path="/security-compliance"
              element={<SecurityCompliancePage />}
            />
            <Route
              path="/information-security-policy"
              element={<InformationSecurityPolicyPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
