import React from "react";
import { Link } from "react-router-dom";
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

        <Menu.Item as={Link} to={"/"} active position="right">
          About
        </Menu.Item>

        <Menu.Item as={Link} to="/projects">
          Projects
        </Menu.Item>
        <Menu.Item as={Link} to="/academics">
          Academics
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default DesktopMenu;
