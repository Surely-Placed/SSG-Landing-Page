import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import Careers from "./pages/Careers";
import CareerMentorship from "./pages/services/CareerMentorship";
import JobReferrals from "./pages/services/JobReferrals";
import ConsultantNetwork from "./pages/services/ConsultantNetwork";
import CorporateHiring from "./pages/services/CorporateHiring";
import ScrollToTop from "@/components/ScrollToTop";
import CeoJourney from "./pages/CeoJourney";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/ceo-journey" element={<CeoJourney />} />
          <Route path="/services/career-mentorship" element={<CareerMentorship />} />
          <Route path="/services/job-referrals" element={<JobReferrals />} />
          <Route path="/services/consultant-network" element={<ConsultantNetwork />} />
          <Route path="/services/corporate-hiring" element={<CorporateHiring />} />
          <Route path="/privacy-poilicy" element={<PrivacyPolicy />} />
          {/* common correct spelling as an alias */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
