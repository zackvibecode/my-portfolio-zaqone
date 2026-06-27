import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SystemMap } from "@/components/SystemMap";
import { ChatbotSystems } from "@/components/ChatbotSystems";
import { Results } from "@/components/Results";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden theme-bg">
      <Navbar />
      <Hero />
      <Services />
      <SystemMap />
      <ChatbotSystems />
      <Results />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
