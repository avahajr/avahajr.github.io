import React, { useState, useEffect } from "react";
import { Grid, Image, Divider, Icon, Container, Card } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "fomantic-ui-css/semantic.min.css";
import CaptionedEmoji from "./CaptionedEmoji";
import Marquee from "react-fast-marquee";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

const repos = await octokit.request("GET /users/avahajr/repos", {
  username: "avahajr",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
    accept: "application/vnd.github+json,",
  },
  sort: "pushed",
});
console.log(repos);

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
            <a
              href="https://www.linkedin.com/in/ava-hajratwala-42910b274"
              target="_blank"
              rel="noreferrer"
            >
              <Icon link color="blue" name="linkedin" size="big" />
            </a>
            <a
              href="https://github.com/avahajr"
              target="_blank"
              rel="noreferrer"
            >
              <Icon link color="blue" name="github" size="big" />
            </a>
            <a
              href="https://instagram.com/avahajratwala"
              target="_blank"
              rel="noreferrer"
            >
              <Icon link color="blue" name="instagram" size="big" />
            </a>
          </Container>
        </Grid.Column>
        <Grid.Column width={11}>
          <h1>About me</h1>
          <Divider />
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Grid.Column>
      </Grid>
      <Container></Container>
      <Divider hidden />
      <Marquee pauseOnHover={true}>
        {repos.data.map((repo) => {
          return (
            <Card key={repo.id}>
              <Card.Header>{repo.name}</Card.Header>
              <Card.Content>{repo.description}</Card.Content>
            </Card>
          );
        })}
      </Marquee>
    </>
  );
};

export default DesktopAbout;
