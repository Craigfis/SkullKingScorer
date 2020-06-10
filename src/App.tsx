import React, { useState } from 'react';
import './App.css';
import Sheet from './Sheet';
import { SwitchTransition, CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  let previousPlayersJson = localStorage.getItem('players');
  let initialPlayers = ['Player 1', 'Player 2', 'Player 3'];
  if (previousPlayersJson) {
    initialPlayers = JSON.parse(previousPlayersJson);
  }
  let [players, setPlayers] = useState(initialPlayers);
  let [newPlayerName, setNewPlayerName] = useState('');
  let [newPlayerFieldShown, setNewPlayerFieldShown] = useState(false);
  let [gameStarted, setGameStarted] = useState(false);
  let [legendaryExpansionInPlay, setLegendaryExpansionInPlay] = useState(localStorage.getItem('legendaryExpansionInPlay') === 'true');
  let [historyShown, setHistoryShown] = useState(false);

  const newPlayerNameChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlayerName(event.target.value);
  }

  const addPlayer = () => {
    players.push(newPlayerName);
    setPlayers(players);
    setNewPlayerFieldShown(false);
    localStorage.setItem('players', JSON.stringify(players));
  }
  const deletePlayer = (player: string) => {
    setPlayers(players.filter(p => p !== player));
    localStorage.setItem('players', JSON.stringify(players.filter(p => p !== player)));
  }
  const legendaryExpansionInPlayChanged = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLegendaryExpansionInPlay(!legendaryExpansionInPlay);
    localStorage.setItem('legendaryExpansionInPlay', String(!legendaryExpansionInPlay));
  };
  const startGame = () => {
    setGameStarted(true);
  }
  const toggleHistory = () => {
    setHistoryShown(!historyShown);
  }

  return (
    <div className="App">
      <div className="App-body">
        <h1>Ye New Skull King Scoresheet</h1>
        <button id='viewswitchbutton' onClick={() => toggleHistory()}>
          {historyShown ? 'View Game' : 'View Game History'}
        </button>
        <div id='mainspace'>
        {
          // <CSSTransition in={!historyShown} timeout={200} classNames="scoresheets"
          //   unmountOnExit onEnter={() => {setHistoryShown(false)}}
          //   onExited={() => {setHistoryShown(true)}}>
            <div id='scoresheet' className={'scoresheet' + (historyShown ? '-hidden' : '')} >
            { !newPlayerFieldShown && !gameStarted &&
              <div>
                <input id='legendary_expansion_cb' type='checkbox' checked={legendaryExpansionInPlay}
                onChange={legendaryExpansionInPlayChanged} title='Adds support for the Kraken and Harry the Giant cards'/>
                <label htmlFor={'legendary_expansion_cb'}>Use Legendary Expansion</label>
                <button onClick={() => {setNewPlayerFieldShown(true)}}>Add player</button>
              </div>
            }
            { newPlayerFieldShown && <>
              <input type='text' placeholder='name' onChange={newPlayerNameChanged}></input>
              <button onClick={addPlayer}>OK</button>
              </>
            }

              <Sheet players={players} deletePlayerAction={deletePlayer} startGameAction={startGame} legendaryExpansionInPlay={legendaryExpansionInPlay}></Sheet>
              </div>
            // </CSSTransition>
          }
          { historyShown &&
          // <CSSTransition in={historyShown} timeout={200} classNames="history"
          //   unmountOnExit onEnter={() => {setHistoryShown(true)}}
          //   onExited={() => {setHistoryShown(false)}}>
            <div id='history' className={'history' + (historyShown ? '':'-hidden')}>Game History</div>
          // </CSSTransition>
          }
          </div>
          <br/>
          <div style={{fontSize: 11}}>
          © 2020 Craig Fisher <a href="https://twitter.com/craigfis">@craigfis</a><br/>
          <a href="https://github.com/Craigfis/SkullKingScorer">https://github.com/Craigfis/SkullKingScorer</a>
          <br/>
          <a href="https://www.grandpabecksgames.com/products-skull-king">What is Skull King?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
