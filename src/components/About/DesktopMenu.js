import React from "react";
import { Menu, Container } from "semantic-ui-react";

function DesktopMenu() {
  return (
    <Menu secondary className="main-menu">
      <Container>
        <Menu.Item className="center-logo" width={8}>
          <img
            src="cat-logo.png"
            className="cat logo"
            height="30px"
            style={{
              marginRight: "14px",
              width: "auto",
              marginTop: "20px",
            }}
            alt="/"
          />
          <h1 className="logo"> Ava Hajratwala </h1>
        </Menu.Item>

        <Menu.Item as="a" href="./" active position="right">
          About
        </Menu.Item>

        <Menu.Item as="a" href="./project-hub">
          Projects
        </Menu.Item>
        <Menu.Item as="a" href="./academics">
          Academics
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default DesktopMenu;
