import React from "react";
import { Grid, Image, Divider, Icon, Container, Card } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import "fomantic-ui-css/semantic.min.css";
import CaptionedEmoji from "./CaptionedEmoji";
import Marquee from "react-fast-marquee";

function cleanAndFormatString(input) {
  const words = input.split("-");

  const formattedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return formattedWords.join(" ");
}

const Desktop = ({ bio, repos }) => {
  // console.log(repos);
  return (
    <>
      <div id="about">
        {/* About */}
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
            <ReactMarkdown>{bio}</ReactMarkdown>
          </Grid.Column>
        </Grid>
        <Divider hidden />
      </div>
      <div id="projects">
        {/* Projects */}
        <Container>
          <h1>Projects</h1>
          <Divider />
        </Container>
        {/* {console.log(repos.length)} */}
        {repos.length ? (
          <Marquee pauseOnHover={true}>
            {repos.map((repo) => {
              return (
                <Card className="scrollcard" key={repo.id}>
                  <Card.Header>
                    <h3>{cleanAndFormatString(repo.name)}</h3>
                  </Card.Header>
                  <Card.Content>{repo.description}</Card.Content>
                  <Card.Content extra>
                    {repo.language ? repo.language : ""}
                  </Card.Content>
                </Card>
              );
            })}
          </Marquee>
        ) : (
          <></>
        )}
      </div>
      <div id="academics">
        <Divider />
        <Container>
          <h1>Academics</h1>
        </Container>
      </div>
    </>
  );
};

export default Desktop;
