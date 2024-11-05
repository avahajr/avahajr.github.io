import DefaultLayout from "@/layouts/default";
import About from "@/components/about.tsx";
import Project from "@/components/project.tsx";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <About />
      <Project
        project={{
          title: "wbar.org",
          description: "The official website for WBAR Radio.",
          demoVideoEmbed: "",
          repoLink: "",
          image: "wbar-org.png",
          tags: ["React", "Express.js", "SQL"],
        }}
      />
    </DefaultLayout>
  );
}
