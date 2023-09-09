import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "animate.css";

function MobileMenu() {
  const menuStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
  };

  const itemStyleExpanded = {
    flex: "0",
    width: "auto",
  };

  return (
    <div style={{ marginBottom: "110px" }}>
      <Menu fixed="bottom" icon="labeled" borderless style={menuStyle}>
        <Menu.Item style={itemStyleExpanded} as="a" href="/">
          <Icon name="home" />
          About
        </Menu.Item>

        <Menu.Item style={itemStyleExpanded} as="a" href="./project-hub">
          <Icon name="code" />
          Projects
        </Menu.Item>
        <Menu.Item style={itemStyleExpanded} as="a" href="./academics">
          <Icon name="graduation cap" />
          Academics
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MobileMenu;
