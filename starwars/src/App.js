import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/CharacterCard';
import { Card, Container } from 'semantic-ui-react';
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => setPeople(res.data.results))
      .catch(err => err);
  }, [people]);


  function CreateCharacterCard(person) {
    return (
      <CharacterCard
         key={person.name}
        name={person.name}
        dob={person.birth_year}
        height={person.height}
        mass={person.mass}
        hair_color={person.hair_color}
        skin_color={person.skin_color}
        eye_color={person.eye_color}
        gender={person.gender}
      />
    );
  }
  return (
    <div className='App'>
      <h1 className='Header'>React Wars</h1>
      <Container>
        <Card.Group itemsPerRow={5}>
          {people.map(person => {
            return CreateCharacterCard(person);
          })}
        </Card.Group>
      </Container>
    </div>
  );
};

export default App;
