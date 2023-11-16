import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/nav.jsx';
import characters from './data.js';
import SearchBar from './components/SearchBar.jsx';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = () => {

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name:'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }

   setCharacters(prevCharacters => [...prevCharacters, example]);
   };

   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
       {/*  <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
   />*/}
      <SearchBar onSearch={onSearch} />
      </div>
   );
}

export default App;