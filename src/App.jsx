import { useState, useEffect } from "react";
import { parameters, API_KEY } from "./parameter";
import Header from "/src/components/Header.jsx";
import Container from "/src/components/Container.jsx";
import "./App.css";

export default function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guessedArray, setGuessedArray] = useState([]);

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const data = parameters
      .map(async (item) => {
        const data = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&id=${item.id}`,
          { mode: "cors" }
        );
        const response = data.json();
        return response;
      });

    setCardData(data);
  }, []);

  function shuffleCards() {
    
  };

  function handleClick(e, id) {
    /*
      1. check if this id exist in guessed array:
        yes:
          (means reset game)
          1. store current currScore to bestScore
          2. set currScore to 0
          3. clear guessedArray
        no:
          1. store id in guessedArray setGuessedArray([...guessedArray, id])
          2. +1 currScore

      2. shuffleCards
    */
    shuffleCards();
  }

  console.log(cardData);

  return (
    <>
      <Header 
        className="Header"
        currScore={currScore} 
        bestScore={bestScore} 
      />
      <Container 
        className="Container"
        onClick={() => handleClick()} 
        data={cardData} 
      />
    </>
  );
}
