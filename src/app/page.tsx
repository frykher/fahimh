import Waves from "@/components/Waves";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <Waves />
      <div>
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
