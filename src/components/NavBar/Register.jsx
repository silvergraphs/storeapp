import React from "react";
import { Button, Form } from "semantic-ui-react";

const userTypes = [
  { text: "User", value: "user" },
  { text: "Developer", value: "developer" },
];

export default function Register() {
  return (
    <Form>
      <Form.Input
        icon="user"
        iconPosition="left"
        label="Username"
        placeholder="Your name"
      />
      <Form.Input
        icon="lock"
        iconPosition="left"
        label="Password"
        type="password"
        placeholder="Max. 45 characters"
      />

      <Form.Input
        icon="mail"
        iconPosition="left"
        label="Email"
        type="email"
        placeholder="Your e-mail"
      />

      <Form.Select
        fluid
        label="User Type"
        options={userTypes}
        placeholder="Desired user type"
      />

      <Button primary fluid size="large">
        Register
      </Button>
    </Form>
  );
}
