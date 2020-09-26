import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
  Image,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <Container>
      <Divider style={{ padding: "3em 0em" }} />
      <Segment vertical style={{ paddingBottom: "3em" }}>
        <Container>
          <Grid divided inverted stackable textAlign="center">
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

                <Grid container columns={3} doubling stackable centered>
                  <Grid.Column width={3}>
                    <Image
                      size="tiny"
                      src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                      centered
                    />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image size="tiny" src="/images/reactlogo.png" centered />
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image
                      size="small"
                      src="/images/expresslogo.png"
                      centered
                    />
                  </Grid.Column>
                </Grid>

                {/*                 <a
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  <img
                    alt="Creative Commons License"
                    src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                  />

                </a> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  );
}
