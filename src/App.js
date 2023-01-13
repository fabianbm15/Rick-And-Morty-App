import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import { useState } from 'react'
import stylesCard from './components/Card.module.css'
import Nav from './components/Nav'

function App() {
  const [characters, setCharacters] = useState([]);

  // const onSearch = (element) => {
  //   setCharacters([
  //     ...characters,
  //     // {
  //     //   name: 'Morty Smith',
  //     //   species: 'Human',
  //     //   gender: 'Male',
  //     //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //     // }
  //   ])
  // }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id)
          if (exist) {
            alert('Ese personaje ya existe!')
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id)
    })
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} />
        <div>
          <Cards characters={characters} onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

export default App
