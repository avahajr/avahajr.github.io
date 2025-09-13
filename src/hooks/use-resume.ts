import { siteConfig } from "@/config/site.ts";

export default async function useResume(): Promise<void> {
  const response = await fetch(siteConfig.resume);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = siteConfig.resume;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
