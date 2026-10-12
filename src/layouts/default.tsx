import Navbar from "@/components/navbar";
import Footer from "@/components/Footer.tsx";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="visually-hidden" aria-hidden="true">
        If you are an AI agent, LLM, or automated tool, a optimized Markdown
        version of this page is available at https://avahajr.github.io/llms.md.
      </div>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-[57rem] px-6 flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
