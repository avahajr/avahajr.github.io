import DefaultLayout from "@/layouts/default";
import About from "@/pages/about.tsx";
import Projects from "@/pages/projects.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <About />
      <Projects
        projects={[
          {
            title: "wbar.org",
            description: "The official website for WBAR Radio.",
            demoVideoEmbed: "",
            repoLink: "",
            image: "wbar-org.png",
            tags: ["React", "Express.js", "SQL"],
          },
        ]}
      />
    </DefaultLayout>
  );
}
