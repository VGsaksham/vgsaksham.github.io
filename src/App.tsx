import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "@/components/LoadingScreen";
import HireMePage from "./pages/HireMePage";
import ScrollToHash from "@/components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  
  // Disable scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);
  
  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToHash />
            <Routes>
              <Route path="/" element={<Index skipLoading={true} />} />
              <Route path="/hire-me" element={<HireMePage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
