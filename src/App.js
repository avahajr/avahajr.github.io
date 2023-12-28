// import { createMedia } from "@artsy/fresnel";
// import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import DesktopMenu from "./components/Desktop/DesktopMenu";
import MobileMenu from "./components/Mobile/MobileMenu";

import MobileHeading from "./components/Mobile/MobileHeading";

import Desktop from "./components/Desktop/Desktop";
import { Octokit } from "octokit";
import Mobile from "./components/Mobile/Mobile";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const [markdown, setMarkdown] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
    const octokit = new Octokit({
      auth: process.env.REACT_APP_WEB_AUTH,
    });
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(repos);
  return (
    <>
      {isMobile ? <MobileHeading /> : <DesktopMenu />}

      {isMobile ? (
        <Mobile bio={markdown} repos={repos} />
      ) : (
        <Desktop bio={markdown} repos={repos} />
      )}

      {isMobile ? <MobileMenu style={{ marginTop: "95px" }} /> : <></>}
    </>
  );
}

export default App;
