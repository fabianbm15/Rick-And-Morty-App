import './SearchBar.css'

import { useState } from 'react';

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');

   function handleInput(event) {
      setCharacter(event.target.value)
   }

   function randomCharacter(event) {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      setCharacter(randomNumber)
   }

   return (
      <div className='searchBar'>
         <input className='barraBusqueda' type='search' name='search' placeholder='type id'
            onChange={(e) => handleInput(e)} value={character} />
         <button className='boton' onClick={() => props.onSearch(character)}>Agregar</button>
         <button className='boton' onClick={randomCharacter}>Random</button>
      </div>
   );
}
