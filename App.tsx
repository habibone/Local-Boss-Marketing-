
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/Home';
import { 
  ServicesPage, 
  IndustriesPage, 
  ResultsPage, 
  PricingPage, 
  AboutPage, 
  BlogPage, 
  ContactPage,
  GMBPage,
  WebsitePage,
  AutomationPage,
  ReputationPage,
  TermsPage,
  PrivacyPage
} from './pages/ContentPages';

// ScrollToTop component to ensure pages start at the top on navigation
// Fix: Use useLocation to correctly detect route changes for scrolling to top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="google-business-profile" element={<GMBPage />} />
          <Route path="website-and-lead-capture" element={<WebsitePage />} />
          <Route path="ai-automation" element={<AutomationPage />} />
          <Route path="reputation-management" element={<ReputationPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="case-studies" element={<ResultsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
