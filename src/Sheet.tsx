import React, { FunctionComponent, useState } from 'react';
import Round from './Round';
import './Sheet.css';
import NumberDictionary from './NumberDictionary';


interface SheetProps {
  players: string[];
  deletePlayerAction: (player: string) => void;
  startGameAction: () => void;
}

const Sheet: FunctionComponent<SheetProps> = ({players, deletePlayerAction, startGameAction}) => {
  let [currentRound, setCurrentRound] = useState(1);
  let [scores, setScores] = useState([] as NumberDictionary[]);

  let nextRound = (roundScores: NumberDictionary) => {
    if (currentRound === 1) {
      startGameAction();
    }
    scores[currentRound] = roundScores;
    setScores(scores);
    setCurrentRound(currentRound+1);
  }
  
  return (
    <>
    <table>
      <thead>
        <tr>
        <th>Round</th>
        {
          players.map(p => 
          <th key={p}>{p} 
          { currentRound === 1 && <button onClick={() => {deletePlayerAction(p)}}>	&#10007;</button>}
          </th>)
        }
        </tr>
      </thead>
      <tbody>
    { [1,2,3,4,5,6,7,8,9,10].map(n =>
         <Round key={n} cardCount={n} players={players} prevRoundScores={n > 1 ? scores[n-1] : null}
          currentRound={currentRound} roundCompleteAction={nextRound}/>
      )
    }
    </tbody>
    </table>
    </>
  );
}

export default Sheet;
