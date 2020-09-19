import React from "react";
import { Header, Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function Apps() {
  const { id } = useParams();

  if (id) {
    return (
      <div>
        <Header as="h2" inverted textAlign="center">
          App ID {id}
        </Header>
      </div>
    );
  } else {
    return (
      <div>
        <Header as="h2" inverted textAlign="center">
          All Apps
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
      </div>
    );
  }
}
