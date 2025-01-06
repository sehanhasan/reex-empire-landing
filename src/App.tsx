import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/toaster";
import Index from "./pages/Index";
import { ServiceDetail } from "./components/ServiceDetail";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
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