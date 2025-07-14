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
    const mapData = async () => {
      const promises = parameters.map((parameter) => getData(parameter));
      const complete = await Promise.all(promises);
      setCardData(complete);
    };
    mapData();
  }, []);

  async function getData(parameter) {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&id=${parameter.id}`
      );
      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }

  function shuffleCards() {
    const tempArr = [...cardData];

    let switchIndex;
    for (let i = 0; i < tempArr.length; i++) {
      switchIndex = Math.floor(Math.random() * tempArr.length);
      [tempArr[i], tempArr[switchIndex]] = [tempArr[switchIndex], tempArr[i]];
    }

    setCardData(tempArr);
  }

  function handleClick(id) {
    if (guessedArray.includes(id)) {
      if (currScore > bestScore) {
        setBestScore(currScore);
      }
      setCurrScore(0);
      setGuessedArray([]);
    } else {
      setGuessedArray([...guessedArray, id]);
      setCurrScore(currScore + 1);
    }
    shuffleCards();
  }

  return (
    <>
      <div className="help">
        ?
      <p className="sample">Pick a card each round, the cards will shuffle. Then, pick a different card from the one/s you've picked in the previous round/s until current score resets.</p>
      </div>
      <Header className="Header" currScore={currScore} bestScore={bestScore} />
      <Container
        className="Container"
        clickFunction={handleClick}
        data={cardData}
      />
    </>
  );
}
