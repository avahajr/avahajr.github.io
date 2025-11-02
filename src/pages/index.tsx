import DefaultLayout from "@/layouts/default";
import About from "@/pages/about.tsx";
import Portfolio from "@/pages/portfolio.tsx";
import { portfolio } from "@/config/portfolio.ts";
import Contact from "@/pages/contact.tsx";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <About />
      <Portfolio projects={portfolio} />
      <Contact />
    </DefaultLayout>
  );
}
