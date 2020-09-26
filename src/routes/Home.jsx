import React from "react";
import { Grid, Header, Transition, Container } from "semantic-ui-react";

export default function Home() {
  return (
    <Transition transitionOnMount={true} animation="fade up" duration={175}>
      <Container style={{ paddingTop: "1.3em" }}>
        <Header as="h2" inverted textAlign="center">
          Recent Apps
        </Header>
        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column>
              <p />
            </Grid.Column>
            <Grid.Column>
              <p />
            </Grid.Column>
            <Grid.Column>
              <p />
            </Grid.Column>
            <Grid.Column>
              <p />
            </Grid.Column>
            <Grid.Column>
              <p />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <style>
          {`
      #colors p {
        background-color: 000;
        opacity: 0.1;
      }
    `}
        </style>

        <Header as="h2" inverted textAlign="center">
          Categories
        </Header>
        <Grid>
          <Grid.Row only="tablet computer">
            <Grid.Column>
              <p>
                <span>Category 1</span>
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row only="tablet computer">
            <Grid.Column>
              <p>
                <span>Category 2</span>
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2} only="tablet">
            <Grid.Column>
              <p>
                <span>Tablet</span>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                <span>Tablet</span>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} only="mobile">
            <Grid.Column>
              <p>
                <span>Mobile</span>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                <span>Mobile</span>
              </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                <span>Mobile</span>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Transition>
  );
}
