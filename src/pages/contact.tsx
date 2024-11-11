export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20" id="contact">
      <div className="text-7xl font-semibold">Like what you see?</div>
      <div className="text-lg mt-4">
        <p>Let&#39;s talk about your next project.</p>
        <p>Send me an email at:</p>
        <a
          className="text-blue-500 hover:underline"
          href="mailto:avahajr@gmail.com"
        >
          avahajr@gmail.com
        </a>
      </div>
    </section>
  );
}
