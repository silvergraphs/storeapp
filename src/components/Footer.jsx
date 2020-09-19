import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <Divider style={{ padding: "3em 0em" }} />
      <Segment vertical>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Store" />
                <List link inverted>
                  <List.Item as="a" href="/apps">
                    Applications
                  </List.Item>
                  <List.Item as="a" href="/categories">
                    Categories
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Useful Links" />
                <List link inverted>
                  <List.Item as="a">GitHub Profile</List.Item>
                  <List.Item as="a">GitHub Repo</List.Item>
                  <List.Item as="a">LinkedIn</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h4" inverted>
                  Full Stack Store App
                </Header>
                <p className="footerText">
                  Developed with <Icon name="like" />
                  by Bruno Caruso
                </p>

                <p className="footerText">
                  <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-sa/4.0/"
                  >
                    <img
                      alt="Creative Commons License"
                      src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                    />
                  </a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  );
}
