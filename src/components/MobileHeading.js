import React from "react";
import { Container, Menu } from "semantic-ui-react";
// import "animate.css";

function MobileHeading() {
  const headerStyle = {
    padding: "15px",
  };

  return (
    <div style={{ marginBottom: "95px" }}>
      <Menu borderless fixed="top" style={headerStyle}>
        <Container
          as="h2"
          style={{
            fontFamily: "Pixeboy",
            fontSize: "35px",
            alignItems: "center",
          }}
        >
          <img
            src="cat-logo.png"
            height="30px"
            style={{
              marginRight: "14px",
              top: "50%",
            }}
            alt="/"
          />
          Ava Hajratwala
        </Container>
      </Menu>
    </div>
  );
}

export default MobileHeading;
