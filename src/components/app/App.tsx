import React from 'react';
import './App.css';
import Bandit from '../../oop/units/bandit';
import Game from '../../oop/game/game';

const App = () => {
  const initHandler = () => {
    const bandit = new Bandit();
    const game = new Game();
    console.log(bandit);
  }

  return (
    <div>
      App
      <button onClick={initHandler}>
        Start
      </button>
    </div>
  )
}

export default App;
