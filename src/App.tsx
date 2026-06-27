import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { AdminGuard } from "@/components/admin/admin-guard";
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
import WhoWeWorkWithPage from "@/pages/who-we-work-with";
import PlaceholderPage from "@/pages/placeholder";
import CaseStudiesPage from "@/pages/case-studies";
import CaseStudyDetailPage from "@/pages/case-study-detail";
import MediaGalleryPage from "@/pages/media-gallery";
import ResourcesPage from "@/pages/resources";
import BlogPostPage from "@/pages/blog-post";
import AISaaSStartupsPage from "@/pages/sectors/ai-saas-startups";
import HospitalityRestaurantsPage from "@/pages/sectors/hospitality-restaurants";
import SmallMidSizeBusinessesPage from "@/pages/sectors/small-mid-size-businesses";
import EcommerceRetailPage from "@/pages/sectors/ecommerce-retail";
import NorthAmericaPage from "@/pages/regions/north-america";
import EuropeUKPage from "@/pages/regions/europe-uk";
import APACPage from "@/pages/regions/apac";
import AdminLoginPage from "@/pages/admin/login";
import AdminLayout from "@/pages/admin/layout";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminCaseStudies from "@/pages/admin/case-studies";
import AdminMedia from "@/pages/admin/media";
import AdminBlog from "@/pages/admin/blog";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminLayout />
            </AdminGuard>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="case-studies" element={<AdminCaseStudies />} />
          <Route path="media" element={<AdminMedia />} />
          <Route path="blog" element={<AdminBlog />} />
        </Route>
      </Routes>
    );
  }

  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/who-we-work-with" element={<WhoWeWorkWithPage />} />
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
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/media" element={<MediaGalleryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:slug" element={<BlogPostPage />} />
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
        <Route
          path="/sectors/ai-saas-startups"
          element={<AISaaSStartupsPage />}
        />
        <Route
          path="/sectors/hospitality-restaurants"
          element={<HospitalityRestaurantsPage />}
        />
        <Route
          path="/sectors/small-mid-size-businesses"
          element={<SmallMidSizeBusinessesPage />}
        />
        <Route
          path="/sectors/ecommerce-retail"
          element={<EcommerceRetailPage />}
        />
        <Route
          path="/regions/north-america"
          element={<NorthAmericaPage />}
        />
        <Route
          path="/regions/europe-uk"
          element={<EuropeUKPage />}
        />
        <Route
          path="/regions/apac"
          element={<APACPage />}
        />
      </Routes>
    </PublicLayout>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
