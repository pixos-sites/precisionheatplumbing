import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { StickyCTA } from "./components/StickyCTA";
import { Testimonials } from "./components/Testimonials";
import { TrustBar } from "./components/TrustBar";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { getActivePreset } from "@/config/getActivePreset";

const preset = getActivePreset();

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#FAFAF8] pb-[60px] lg:pb-0"
      style={{
        ["--brand-accent" as string]: preset.brand.accent,
        ["--brand-accent-hover" as string]: preset.brand.accentHover,
        ["--brand-accent-soft" as string]: preset.brand.accentSoft,
        ["--brand-accent-ink" as string]: preset.brand.accentInk ?? preset.brand.accent,
        ["--brand-accent-on" as string]: preset.brand.accentOnAccent ?? "#FFFFFF",
        ["--brand-body-font" as string]: preset.brand.fontBody,
        ["--brand-heading-font" as string]: preset.brand.fontHeading,
      }}
    >
      <Navbar preset={preset} />
      <Hero preset={preset} />
      <TrustBar preset={preset} />
      <Services preset={preset} />
      <Process preset={preset} />
      <Portfolio preset={preset} />
      <WhyChooseUs preset={preset} />
      <Testimonials preset={preset} />
      <ContactForm preset={preset} />
      <Footer preset={preset} />
      <StickyCTA preset={preset} />
    </div>
  );
}
