import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const queryClient = new QueryClient();

// Wrapper component for TooltipProvider
const TooltipWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TooltipPrimitive.Provider delayDuration={0}>
    {children}
  </TooltipPrimitive.Provider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipWrapper>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/landing-page">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </TooltipWrapper>
  </QueryClientProvider>
);

export default App;
