import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Currently } from "@/components/sections/currently";
import { Projects } from "@/components/sections/projects";
import { Interests } from "@/components/sections/interests";
import { About } from "@/components/sections/about";
import { Notes } from "@/components/sections/notes";
import { Footer } from "@/components/sections/footer";
import { Achievements } from "@/components/sections/achievements";

export default function Page() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Currently />
        <Projects />
        <Interests />
        <Achievements />
        <About />
        <Notes />
      </main>
      <Footer />
    </div>
  );
}
