import React, { useState, useEffect } from 'react';
import './App.css';
import './index.scss';

import styled from "styled-components";
import StyledPlayerCard from "./components/styled/StyledPlayerCard"

import settings from './settings';

function List({ player, handleRollDice, currentPlayer }) {
  return (
    <StyledPlayerCard bg="white" border="2px solid #d0d4d7">
      <h1>{player.name}</h1>
      <img src={player.imageUrl} alt="Avatar"></img>
      <p>Score:{player.currentScore}</p>
      <button className="btn-roll" onClick={() => handleRollDice(player.id)} disabled={currentPlayer !== player.id}>Roll</button>
    </StyledPlayerCard>
  )
}

function App() {

  const [allPlayers, setAllPlayers] = useState([]);
  const [scoreToWin, setScoreToWin] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [matchId, setMatchId] = useState([]);

  // get players function
  const getAllPlayers = async () => {
    // fetch from the api
    try {
      const res = await fetch(settings.url);
      const data = await res.json();

      // add the messages to our list
      setAllPlayers(data.players.map(pl => ({ ...pl, currentScore: 0 }))) // Adding score to players
      setScoreToWin(data.scoreToWin)
      setMatchId(data.matchId)
      setCurrentPlayer(data.players[0].id)
    } catch (event) {
      setErrorMessage("An error has occurred while fetching the messages")
    }
  };

  useEffect(() => {
    getAllPlayers()
  }, []);

  useEffect(() => {
    displayWinner()
  }, [allPlayers]);

  function handleRollDice(playerId) {
    let randomNumber = parseInt(Math.ceil(Math.random() * 5 + 1));

    // find player
    const playerIndex = allPlayers.findIndex(pl => (pl.id === playerId))

    // copy the player list
    const newPlayerList = [...allPlayers];

    // update the specific player
    newPlayerList[playerIndex] = {
      ...allPlayers[playerIndex],
      currentScore: randomNumber + newPlayerList[playerIndex].currentScore // score update
    }

    // update player list
    setAllPlayers(newPlayerList)

    const nextPlayerId = playerIndex < allPlayers.length - 1 ? allPlayers[playerIndex + 1].id : allPlayers[0].id
    setCurrentPlayer(nextPlayerId)
  }

  function displayWinner() {
    console.log(allPlayers, scoreToWin)
    const winner = allPlayers.find(pl => pl.currentScore > scoreToWin)
    setWinner(winner)
  }

  return (
    <div className="App">
      <div className="container">
        <p className="match">Match Id: {matchId}</p>
        <h1 className="app-title">Roll The Dice</h1>
        <p className="score">Score: {scoreToWin}</p>
      </div>
      {!winner ?
        <div className="cards">
          {allPlayers.map(player => <List player={player} handleRollDice={handleRollDice} currentPlayer={currentPlayer} />)}
        </div> : 
        <Winner>
          <p>{winner && `The winner is:`}</p>
          <StyledPlayerCard bg="#fff2c9" border="3px solid #ebda16">
            <h1>{winner.name}</h1>
            <img src={winner.imageUrl} alt="Avatar"></img>
            <p>Score:{winner.currentScore}</p>
          </StyledPlayerCard>
        </Winner>}
    </div>
  );
}

export default App;

const Winner = styled.div`
    display: block;
`