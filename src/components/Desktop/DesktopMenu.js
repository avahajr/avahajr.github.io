import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

function DesktopMenu() {
  const [activeItem, setActiveItem] = useState("about");
  const handleClick = (item) => {
    setActiveItem(item);
  };
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

        <Menu.Item
          as={Link}
          to={"/"}
          active={activeItem === "about"}
          position="right"
          onClick={() => handleClick("about")}
        >
          About
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/projects"
          active={activeItem === "projects"}
          onClick={() => handleClick("projects")}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/academics"
          active={activeItem === "academics"}
          onClick={() => handleClick("academics")}
        >
          Academics
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default DesktopMenu;
