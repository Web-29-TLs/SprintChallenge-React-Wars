import React from 'react';
import { Image, Container, Grid, Header, Card, Divider } from 'semantic-ui-react';

function CharacterCard(props) {
  var style_h = {
      'background':'#575757',
    'font-weight': 'bold',
    'color':'white',
    'border-radius':'10px',
    'padding':'5px'
  };
  var style = {
    'font-weight': 'bold',
    'color':'#474747',
  }
  return (
    <Grid
    style={{'background':'#676767'}} 
    className='card'>

      <Image
        style={{'border':'1px solid #878787'}}
        src='https://www.sackettwaconia.com/wp-content/uploads/default-profile.png'
        wrapped
        ui={false}
      />
      <Card  style={{'background':'#676767','color':'white'}} >
        <Card.Content>
          <Card.Header ><h2 style={style_h}>{props.name}</h2> </Card.Header>
          <Card.Meta>
            <p>date of birth: {props.dob}</p>
          </Card.Meta>
        </Card.Content>

        <Card.Content content>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <p>
                  <span style={style}>height (cm): </span> {props.height}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  <span style={style}>mass: (kg) </span> {props.mass}
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
