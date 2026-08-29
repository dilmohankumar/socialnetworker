import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import CompanyOverview from './pages/CompanyOverview.jsx';
import ExecutiveLeadership from './pages/ExecutiveLeadership.jsx';
import ClientPartners from './pages/ClientPartners.jsx';
import News from './pages/News.jsx';
import Events from './pages/Events.jsx';
import LifeAtsocialnetworker from './pages/LifeAtXilligence.jsx';
import ServicesOverview from './pages/ServicesOverview.jsx';
import MobileApps from './pages/MobileApps.jsx';
import CloudWeb from './pages/CloudWeb.jsx';
import DesignUiUx from './pages/DesignUiUx.jsx';
import AiMlBi from './pages/AiMlBi.jsx';
import Bps from './pages/Bps.jsx';
import ProductEngineering from './pages/ProductEngineering.jsx';
import QualityEngineering from './pages/QualityEngineering.jsx';
import FunctionalTesting from './pages/FunctionalTesting.jsx';
import TestAutomation from './pages/TestAutomation.jsx';
import NonFunctionalTesting from './pages/NonFunctionalTesting.jsx';
import PerformanceTesting from './pages/PerformanceTesting.jsx';
import SecurityTesting from './pages/SecurityTesting.jsx';
import SapTesting from './pages/SapTesting.jsx';
import FactoringSolutions from './pages/FactoringSolutions.jsx';
import Seffo from './pages/Seffo.jsx';
import Ecommerce from './pages/Ecommerce.jsx';
import DigitalHealth from './pages/DigitalHealth.jsx';
import BankingFinancialServices from './pages/BankingFinancialServices.jsx';
import Technologies from './pages/Technologies.jsx';
import OurWork from './pages/OurWork.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import LocationDetail from './pages/LocationDetail.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<CompanyOverview />} />
          <Route path="/about/company-overview" element={<CompanyOverview />} />
          <Route path="/about/executive-leadership" element={<ExecutiveLeadership />} />
          <Route path="/about/client-partners" element={<ClientPartners />} />
          <Route path="/about/news" element={<News />} />
          <Route path="/about/events" element={<Events />} />
          <Route path="/about/life-at-socialnetworker" element={<LifeAtsocialnetworker />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-web" element={<CloudWeb />} />
          <Route path="/services/design-ui-ux" element={<DesignUiUx />} />
          <Route path="/services/ai-ml-bi" element={<AiMlBi />} />
          <Route path="/services/bps" element={<Bps />} />
          <Route path="/services/product-engineering" element={<ProductEngineering />} />
          <Route path="/services/quality-engineering" element={<QualityEngineering />} />
          <Route path="/services/quality-engineering/functional-testing" element={<FunctionalTesting />} />
          <Route path="/services/quality-engineering/test-automation" element={<TestAutomation />} />
          <Route path="/services/quality-engineering/non-functional" element={<NonFunctionalTesting />} />
          <Route path="/services/quality-engineering/performance-testing" element={<PerformanceTesting />} />
          <Route path="/services/quality-engineering/security-testing" element={<SecurityTesting />} />
          <Route path="/sap-testing" element={<SapTesting />} />
          <Route path="/services/factoring-solutions" element={<FactoringSolutions />} />
          <Route path="/verticals/seffo" element={<Seffo />} />
          <Route path="/verticals/e-commerce" element={<Ecommerce />} />
          <Route path="/verticals/digital-health" element={<DigitalHealth />} />
          <Route path="/verticals/banking-financial-services" element={<BankingFinancialServices />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/locations/:country" element={<LocationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
