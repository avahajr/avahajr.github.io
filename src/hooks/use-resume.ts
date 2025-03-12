export default async function useResume(): Promise<void> {
  const response = await fetch("./Ava_Hajratwala_resume.pdf");
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "Ava_Hajratwala_resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}
