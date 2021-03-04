import React from 'react';
import './App.css';
import Bandit from '../../oop/units/bandit';
import Archimage from '../../oop/units/archimage';
import Bishop from '../../oop/units/bishop';
import Game from '../../oop/game/game';
import Initialization from '../../oop/initialization';
import Centaur from '../../oop/units/centaur';
import ElfArcher from '../../oop/units/elfArcher';
import SkeletonMage from '../../oop/units/skeletonMage';
import Monk from '../../oop/units/monk';
import Sirena from '../../oop/units/sirena';
import Round from '../../oop/round/round';

const App = () => {
  const initHandler = () => {
    const archimage = new Archimage();
    const bandit = new Bandit();
    const bishop = new Bishop();
    const centaur = new Centaur();
    const elfArcher = new ElfArcher();
    const skeletonM = new SkeletonMage();
    const monk = new Monk();
    const sirena = new Sirena();

    const allRenderCards = Initialization();
    const round = new Round(2, 3, allRenderCards, 1);
    round.realizeRound();
    console.log(Initialization());
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
