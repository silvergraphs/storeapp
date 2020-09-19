import React from "react";
import {} from "semantic-ui-react";
import { Button, Container, Menu, Modal } from "semantic-ui-react";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}

export default function UserCp() {
  const fixed = false;

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;

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
          onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
        >
          Sign Up
        </Button>
      </Menu.Item>

      {/* Modal */}
      <div>
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        >
          <Modal.Header>Sign Up</Modal.Header>
          <Modal.Content>Feature under development</Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Disagree
            </Button>
            <Button positive onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
              Agree
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </Container>
  );
}
