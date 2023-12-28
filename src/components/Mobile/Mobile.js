import React from "react";
import { Divider, Container } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "fomantic-ui-css/semantic.min.css";

function Mobile({ bio, repos }) {
  return (
    <>
      {/* <Image centered size="small" circular src="pfp.png" /> */}
      <Container>
        <h1>About me</h1>
        <ReactMarkdown>{bio}</ReactMarkdown>
      </Container>

      <Divider hidden />
    </>
  );
}

export default Mobile;
