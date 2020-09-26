import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
  return (
    <Form>
      <Form.Input
        icon="user"
        iconPosition="left"
        label="Username"
        placeholder="Username"
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        label="Password"
        type="password"
        placeholder="Password"
      />

      <Button primary fluid size="large">
        Login
      </Button>
    </Form>
  );
}
