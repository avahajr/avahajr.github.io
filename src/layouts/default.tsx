import Navbar from "@/components/navbar";
import Footer from "@/components/Footer.tsx";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-[57rem] px-6 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
