import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function UserCp() {
  const fixed = false;
  return (
    <Container>
      <Menu.Item position="right">
        <Button as="a" inverted={!fixed}>
          Log in
        </Button>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
        >
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  );
}
