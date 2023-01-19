import Card from "./Card";
import "./Cards.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className="cards">
      {characters.map(function (element, key) {
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
  );
}
