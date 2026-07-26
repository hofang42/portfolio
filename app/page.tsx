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
import ScrollFX from "@/components/ScrollFX";

function SectionShell({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-section data-revealed="false">
      <div className="section-typer" aria-hidden />
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollFX />
      <Nav />
      <section
        id="home"
        data-section
        data-revealed="true"
        data-stagger="true"
      >
        <Hero />
      </section>
      <Divider label="ABOUT" cmd="cat about.md" />
      <SectionShell id="about">
        <About />
      </SectionShell>
      <Divider label="OPS_LOG" cmd="tail -f ops.log" />
      <SectionShell id="experience">
        <Experience />
      </SectionShell>
      <Divider label="ACCELERATOR" cmd="cat ./xbrain-accelerator.md" />
      <SectionShell id="aws">
        <AWSProgram />
      </SectionShell>
      <Divider label="PROJECTS" cmd="ls ./projects" />
      <SectionShell id="projects">
        <Projects />
      </SectionShell>
      <Divider label="STACK" cmd="ls -la ./skills/" />
      <SectionShell id="stack">
        <TechStack />
      </SectionShell>
      <Divider label="EDU" cmd="cat education.yml" />
      <SectionShell id="education">
        <Education />
      </SectionShell>
      <Divider label="CONTACT" cmd="./contact --interactive" />
      <SectionShell id="contact">
        <Contact />
      </SectionShell>
      <Footer />
    </main>
  );
}
