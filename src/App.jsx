import Homepage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "tailwindcss";
import Mission from "./pages/Mission";
import HowItWorksPage from "./pages/HowItWorks";
import BlockchainTrackerPage from "./pages/BlockChainTracker";
import DonatePage from "./pages/DonationPage";
import UserLoginPage from "./pages/UserLogin";
import AdminLoginPage from "./pages/AdminLogin";
import FAQPage from "./pages/FAQPage";
import PrivacyPolicyPage from "./pages/Privacy";
import TermsOfServicePage from "./pages/TermsOfService";
import ContactUsPage from "./pages/ContactUs";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/mission" element={<Mission />}></Route>
            <Route path="/how-it-works" element={<HowItWorksPage />}></Route>
            <Route
              path="/blockchain-tracker"
              element={<BlockchainTrackerPage />}
            ></Route>
            <Route path="/login" element={<UserLoginPage />}></Route>
            <Route path="/admin/login" element={<AdminLoginPage />}></Route>
            <Route path="/donation" element={<DonatePage />}></Route>
            <Route path="/faq" element={<FAQPage />}></Route>
            <Route path="/privacy" element={<PrivacyPolicyPage />}></Route>
            <Route path="/terms" element={<TermsOfServicePage />}></Route>
            <Route path="/contact" element={<ContactUsPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
