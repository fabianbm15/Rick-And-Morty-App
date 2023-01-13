import './Card.css';

export default function Card(props) {
   return (
      <div className='card'>
         <img className='imagen' src={props.image} alt={props.image} />
         <button className='botonCerrar' onClick={props.onClose}>X</button>
         <h2 className='nombre'>{props.name}</h2>
         <div className='especieGenero'>
            <h2>Especie: {props.species}</h2>
            <h2>Género: {props.gender}</h2>
         </div>
      </div>
   );
}
