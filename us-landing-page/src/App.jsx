import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../src/components/header/header.jsx"; // Updated path
import Footer from "../src/components/Footer/Footer"; // Updated path
import About from "../src/components/About/About";    // Updated path
import Home from "../src/components/Home/Home";       // Updated path
import ServiceSection from "./Pages/ServiceSection/ServiceSection";
import ContactUs from "./Pages/Contact-Us/ContactUs";
import WebsiteDevelopment from './Pages/ServiceSection/Web-Service/website-development';
import DigitalMarketing from './Pages/ServiceSection/Digital-Markiting/digital-marketing';
import SeoOptimization from './Pages/ServiceSection/SEO-Optimization/seo-optimization';
import BrandingGraphicDesign from './Pages/ServiceSection/branding-graphic-design/branding-graphic-design';
import EcommerceOptimization from './Pages/ServiceSection/e-commerce-optimization/e-commerce-optimization';
import ProfessionalTraining from './Pages/ServiceSection/professional-training/professional-training';
import InHouseStudio from './Pages/ServiceSection/in-house-studio/in-house-studio.jsx';
import LeadGenerationSales from './Pages/ServiceSection/lead-generation-sales/lead-generation-sales.jsx';
import Blog from './Pages/blog/blog';
import ScrollToTop from '../src/components/ScrollToTop.js';
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="Main-Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesSection" element={<ServiceSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Web-Service/website-development" element={<WebsiteDevelopment />} />
          <Route path="/Digital-Marketing/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/SEO-Optimization/seo-optimization" element={<SeoOptimization />} />
          <Route path="/branding-graphic-design/branding-graphic-design" element={<BrandingGraphicDesign />} />
          <Route path="/e-commerce-optimization/e-commerce-optimization" element={<EcommerceOptimization />} />
          <Route path="/professional-training/professional-training" element={<ProfessionalTraining />} />
          <Route path="/in-house-studio/in-house-studio" element={<InHouseStudio />} />
          <Route path="/lead-generation-sales/lead-generation-sales" element={<LeadGenerationSales />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
        </div>
      <Footer />
    </>
  );
};

export default App;
