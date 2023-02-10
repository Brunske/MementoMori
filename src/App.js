import React from "react";
import logo from "./logo.svg";
import "./App.css";
import shuffle from "./utilities/shuffle";

function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
        })}
        return (
        <Card key={id} image={image} selected={false} onclick={() => {}} />)
      </div>
    </>
  );
}

export default App;
