export default function About() {
  return (
    <div id="about">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-8">Hi, I&#39;m Ava.</h1>
      <p className="text-xl">
        I’m a recent Columbia grad with{" "}
        <span className="font-semibold">proven leadership experience</span>,{" "}
        <span className={"font-semibold"}>excellent communication skills</span>,
        and a passion for developing new features using{" "}
        <span className="font-semibold">cutting-edge technologies</span>.
      </p>
      <p className="text-lg mt-8">
        I&#39;m currently a software engineer at WBAR Radio, where I wear
        (almost) every hat.
      </p>

      {/*<div className="flex mt-12 justify-between align-middle" id="about-links">*/}
      {/*  <div className="flex gap-2.5" id="socials-links">*/}
      {/*    {siteConfig.links.map((social) => {*/}
      {/*      return (*/}
      {/*        <a*/}
      {/*          key={social.platform}*/}
      {/*          className="text-lg text-default-600 hover:text-primary-600"*/}
      {/*          href={social.href}*/}
      {/*          rel={"noopener noreferrer"}*/}
      {/*          target="_blank"*/}
      {/*        >*/}
      {/*          <i className={`text-3xl bi bi-${social.platform}`} />*/}
      {/*        </a>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*  <Link*/}
      {/*    className="flex gap-2"*/}
      {/*    href={siteConfig.resume}*/}
      {/*    rel={"noopener noreferrer"}*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    <div className="text-lg">Resume</div>*/}
      {/*    <i className={"bi bi-box-arrow-up-right"} />*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
}
