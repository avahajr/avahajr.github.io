import React from "react";
import {
  Grid,
  Image,
  Divider,
  Icon,
  Container,
  Card,
  Label,
} from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
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
                className="social"
                href="https://www.linkedin.com/in/ava-hajratwala-42910b274"
                target="_blank"
                rel="noreferrer"
              >
                <Icon link color="blue" name="linkedin" size="big" />
              </a>
              <a
                className="social"
                href="https://github.com/avahajr"
                target="_blank"
                rel="noreferrer"
              >
                <Icon link color="blue" name="github" size="big" />
              </a>
              <a
                className="social"
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
        {repos.length ? (
          <Marquee pauseOnHover={true}>
            {repos.map((repo) => {
              return (
                <Link to={repo.homepage ? repo.homepage : repo.html_url}>
                  <Card
                    color="blue"
                    link
                    // href={repo.homepage ? repo.homepage : repo.html_url}
                    // target="_blank"
                    className="scrollcard"
                    key={repo.id}
                  >
                    {repo.private ? (
                      <Label corner>
                        <Icon name="lock"></Icon>
                      </Label>
                    ) : (
                      <></>
                    )}

                    <Card.Header>
                      <h3>{cleanAndFormatString(repo.name)}</h3>
                    </Card.Header>
                    <Card.Content>{repo.description}</Card.Content>
                    <Card.Content extra>
                      {repo.language ? repo.language : ""}
                    </Card.Content>
                  </Card>
                </Link>
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
