import React, { useState, useEffect } from "react";
import { Grid, Image, Divider, Icon, Container } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "fomantic-ui-css/semantic.min.css";
import CaptionedEmoji from "./CaptionedEmoji";

const DesktopAbout = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/md/bio.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <Divider hidden />
      <Grid stackable container relaxed>
        <Grid.Column width={5}>
          <Image centered size="medium" circular src="pfp.png" />
          <Divider hidden />
          <Divider horizontal content="hobbies" />
          <CaptionedEmoji emoji={":guitar:"} caption={"Classical guitar"} />
          <CaptionedEmoji emoji={":saxophone:"} caption={"Saxophone"} />
          <CaptionedEmoji emoji={":art:"} caption={"Watercolor"} />
          <CaptionedEmoji
            emoji={":fishing_pole_and_fish:"}
            caption={"Fishing"}
          />
          <Container textAlign="center">
            <Divider hidden />
            <Icon link color="blue" name="linkedin" size="big" />
            <Icon link color="blue" name="github" size="big" />
            <Icon link color="blue" name="instagram" size="big" />
          </Container>
        </Grid.Column>
        <Grid.Column width={11}>
          <h1>About me</h1>
          <Divider />
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Grid.Column>
      </Grid>

      <Divider hidden />
    </>
  );
};

export default DesktopAbout;
