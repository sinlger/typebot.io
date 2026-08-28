import { ChatSimulator } from "@/components/sections/ChatSimulator";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { EditorPreview } from "@/components/sections/EditorPreview";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { TemplatesShowcase } from "@/components/sections/TemplatesShowcase";
import { UseCases } from "@/components/sections/UseCases";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <TemplatesShowcase />
        <EditorPreview />
        <ChatSimulator />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
