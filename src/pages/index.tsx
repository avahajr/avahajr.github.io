import DefaultLayout from "@/layouts/default";
import About from "@/pages/about.tsx";
import Portfolio from "@/pages/portfolio.tsx";
import { portfolioItems } from "@/config/portfolioItems.ts";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <About />
      <Portfolio projects={portfolioItems} />
    </DefaultLayout>
  );
}
