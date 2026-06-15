import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import AWSProgram from "@/components/AWSProgram";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function HomePage() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Divider label="ABOUT" />
      <About />
      <Divider label="STACK" />
      <TechStack />
      <Divider label="OPS_LOG" />
      <Experience />
      <Divider label="ACCELERATOR" />
      <AWSProgram />
      <Divider label="PROJECTS" />
      <Projects />
      <Divider label="EDU" />
      <Education />
      <Divider label="CONTACT" />
      <Contact />
      <Footer />
    </main>
  );
}
