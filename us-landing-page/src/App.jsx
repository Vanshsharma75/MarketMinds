import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import USLanding from './pages/usLanding/USLanding.jsx';
import ServicesSection from './pages/services/ServiceSection.jsx';
import Contact from './pages/contact/Contact.jsx';
import About from './pages/about/About.jsx';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';
import ScrollToTop from './components/ScrollToTop.js';
import WebsiteDevelopment from './pages/services/Web-Service/website-development.jsx';
import DigitalMarketing from './pages/services/Digital-Markiting/digital-marketing.jsx';
import SeoOptimization from './pages/services/SEO-Optimization/seo-optimization.jsx';
import BrandingGraphicDesign from './pages/services/branding-graphic-design/branding-graphic-design.jsx';
import EcommerceOptimization from './pages/services/e-commerce-optimization/e-commerce-optimization.jsx';
import ProfessionalTraining from './pages/services/professional-training/professional-training.jsx';
import InHouseStudio from './pages/services/in-house-studio/in-house-studio.jsx';
import LeadGenerationSales from './pages/services/lead-generation-sales/lead-generation-sales.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<USLanding />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Web-Service/website-development" element={<WebsiteDevelopment />} />
          <Route path="/Digital-Marketing/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/SEO-Optimization/seo-optimization" element={<SeoOptimization />} />
          <Route path="/branding-graphic-design/branding-graphic-design" element={<BrandingGraphicDesign />} />
          <Route path="/e-commerce-optimization/e-commerce-optimization" element={<EcommerceOptimization />} />
          <Route path="/professional-training/professional-training" element={<ProfessionalTraining />} />
          <Route path="/in-house-studio/in-house-studio" element={<InHouseStudio />} />
          <Route path="/lead-generation-sales/lead-generation-sales" element={<LeadGenerationSales />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;