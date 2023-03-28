import Card from "./Card";
import "./Cards.css";

export default function Cards(props) {
   const { characters } = props;
   return (
      <div className="container">
         {characters.length > 0 ? (
            <div className="cards">
               {characters.map(function (element) {
                  return (
                     <Card
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        species={element.species}
                        gender={element.gender}
                        image={element.image}
                        onClose={() => props.onClose(element.id)}
                     />
                  );
               })}
            </div>
         ) : (
            <div className="emptyCharacter">
               Puede agregar personajes ingresando su Id y pulsando el botón agregar, o simplemente pulsar el botón random para agregar
               automáticamente.
            </div>
         )}
      </div>
   );
}
