import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact, Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProject />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
