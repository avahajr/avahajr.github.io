import DefaultLayout from "@/layouts/default";
import About from "@/pages/about.tsx";
import Projects from "@/pages/projects.tsx";
import { portfolioItems } from "@/config/portfolioItems.ts";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <About />
      <Projects
        projects={portfolioItems}
      />
    </DefaultLayout>
  );
}
