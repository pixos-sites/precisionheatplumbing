import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-[60px] lg:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <StickyCTA />
    </div>
  );
}