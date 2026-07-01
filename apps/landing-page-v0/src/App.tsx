import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { EditorPreview } from "@/components/sections/EditorPreview";
import { ChatSimulator } from "@/components/sections/ChatSimulator";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Features />
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
