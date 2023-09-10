import React, { useState, useEffect } from "react";
import { Divider, Container } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "fomantic-ui-css/semantic.min.css";

function MobileAbout() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/md/bio.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <>
      {/* <Image centered size="small" circular src="pfp.png" /> */}
      <Container>
        <h1>About me</h1>

        <ReactMarkdown>{markdown}</ReactMarkdown>
      </Container>

      <Divider hidden />
    </>
  );
}

export default MobileAbout;
