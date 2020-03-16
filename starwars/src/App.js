import React, { useState, useEffect, useImperativeHandle } from 'react';
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
  let [page_count, setPageCount] = useState(1)

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page_count}`)
      .then(res => setPeople(res.data.results))
      .catch(err => console.log(err));
  }, [page_count]);


  const handleClick = (str) => {
    str === 'next' ?
      setPageCount(page_count += 1)
      :
      setPageCount(page_count -= 1)
    if (page_count < 0 || page_count > 8)
      setPageCount(1)
  }

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
      <div style={{display:'flex',flexFlow:'row wrap', width:'80%', justifyContent:'space-between', alignItems:"center",alignContent:"center",margin:'0 auto', padding:'1rem'}}>

        <p style={{ color: 'white',background:'black', borderRadius:'50%', padding:'.5rem 1rem', fontSize: '1.4rem' }}>{page_count}</p>
        {page_count > 1 ?
          <button onClick={() => handleClick('prev')}>previous</button>
          : ''}
        <button onClick={() => handleClick('next')}>next</button>
      </div>
    </div>
  );
};

export default App;
