import {Item} from '../interfaces/ICard';
import Initialization from '../initialization';
// import Game from '../game/game';

// const appData = [
//   {name: "bishop", type: "healerMass", image: "path",health: 130, initiative: 50},
//   {name: "skeleton", type: "melee", image: "path",health: 130, initiative: 30},
//   {name: "archimage", type: "mage", image: "path",health: 130, initiative: 40},
//   {name: "bandit", type: "range", image: "path",health: 230, initiative: 60},
//   {name: "bandit", type: "range", image: "path",health: 630, initiative: 20},
//   {name: "bishop", type: "healerMass", image: "path",health: 80, initiative: 20},
//   {name: "skeleton", type: "melee", image: "path",health: 30, initiative: 50},
//   {name: "archimage", type: "mage", image: "path",health: 30, initiative: 50},
//   {name: "bandit", type: "range", image: "path",health: 30, initiative: 50},
//   {name: "bandit", type: "range", image: "path",health: 30, initiative: 50},
//   {name: "skeleton", type: "melee", image: "path",health: 30, initiative: 50},
//   {name: "archimage", type: "mage", image: "path",health: 30, initiative: 50},
// ];


class Round {
  attackIndex: number;
  opponentIndex: number;
  dataRenderUnits:Item[];
  round: number;

  constructor(attackIndex: number, opponentIndex: number, dataRenderUnits:Item[], round: number){
    this.attackIndex = attackIndex;
    this.opponentIndex = opponentIndex;
    this.dataRenderUnits = dataRenderUnits;
    this.round = round;
  }

  realizeRound() {
    const attacker = this.dataRenderUnits.find((item: Item, index: number) => index === this.attackIndex);
    let opponent = this.dataRenderUnits.find((item: Item, index: number) => index === this.opponentIndex);
    // opponent = attacker?.realizeAction();
    // console.log(attacker)
    this.round += 1;
  }
}

// const round = new Round(2, 3, appData, 1);
// round.realizeRound();

export default Round;

