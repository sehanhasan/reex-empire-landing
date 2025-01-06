import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { ServiceDetail } from "./components/ServiceDetail";
import { LanguageProvider } from "./lib/i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;