import { Link } from "@nextui-org/link";

import Navbar from "../components/navbar";

import { siteConfig } from "@/config/site.ts";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 gap-1">
        <span className="text-default-600">Made with</span>
        <i className="text-red-400 bi bi-heart-fill px-1" />
        <span className="text-default-600 ">by</span>
        <Link isExternal href={siteConfig.links[0].href} title="Ava's GitHub">
          <p className="text-primary">Ava</p>
        </Link>
      </footer>
    </div>
  );
}
