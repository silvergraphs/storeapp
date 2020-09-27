import React from "react";
import { Header, Button, Icon, Container } from "semantic-ui-react";

export default function Error(props) {
  return (
    <Container>
      <Header as="h2" icon inverted textAlign="center">
        <Icon name="exclamation circle"></Icon>
        Error {props.errorCode}
      </Header>
      <Header as="h3" icon inverted textAlign="center">
        {props.errorMsg}
        <Header as="h3" icon inverted textAlign="center">
          <Button as="a" href="/home" basic inverted>
            Go to Home
          </Button>
        </Header>
      </Header>
    </Container>
  );
}
