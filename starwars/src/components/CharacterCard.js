import React from 'react';
import { Image, Container, Grid, Header, Card, Divider } from 'semantic-ui-react';

function CharacterCard(props) {
  var style = {
    'font-weight': 'bold'
  };
  return (
    <Grid className='card'>
      <Image
        src='https://www.sackettwaconia.com/wp-content/uploads/default-profile.png'
        wrapped
        ui={false}
      />
      <Card>
        <Card.Content>
          <Card.Header as='h1'>{props.name}</Card.Header>
          <Card.Meta>
            <p>date of birth: {props.dob}</p>
          </Card.Meta>
        </Card.Content>

        <Card.Content>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <p>
                  <span style={style}>height: </span> {props.height}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <span style={style}>mass: </span> {props.mass}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <span style={style}>hair color: </span>
                  {props.hair_color}
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <p>
                  <span style={style}>skin color: </span>
                  {props.skin_color}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <span style={style}>eye color: </span> {props.eye_color}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <span style={style}>gender: </span> {props.gender}
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </Grid>
  );
}

export default CharacterCard;
