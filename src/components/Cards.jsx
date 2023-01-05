import Card from './Card';
import './Cards.css';

export default function Cards(props) {
   const { characters } = props;
   return (<div className='cards'>
      {characters.map(function (element) {
         return (<Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />)

      })}
   </div>);
}
