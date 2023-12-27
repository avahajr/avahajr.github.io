import React, { useState, useEffect } from "react";
import { Grid, Image, Divider, Icon, Container, Card } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "fomantic-ui-css/semantic.min.css";
import CaptionedEmoji from "./CaptionedEmoji";
import Marquee from "react-fast-marquee";
import { Octokit } from "octokit";

function cleanAndFormatString(input) {
  // Split the string into words based on hyphens
  const words = input.split("-");

  // Capitalize the first letter of each word
  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );

  // Join the words into a single string
  return formattedWords.join(" ");
}

const octokit = new Octokit({
  auth: "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",
});

const DesktopAbout = () => {
  const [markdown, setMarkdown] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await octokit.request("GET /users/avahajr/repos", {
          username: "avahajr",
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
            accept: "application/vnd.github+json",
          },
          sort: "pushed",
        });
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();

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
        {repos.map((repo) => {
          return (
            <Card key={repo.id}>
              <Card.Header>{cleanAndFormatString(repo.name)}</Card.Header>
              <Card.Content>{repo.description}</Card.Content>
            </Card>
          );
        })}
      </Marquee>
    </>
  );
};

export default DesktopAbout;
