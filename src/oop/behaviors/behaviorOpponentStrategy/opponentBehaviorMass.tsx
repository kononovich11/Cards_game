import IOpponentBehavior from './IOpponentBehavior';
import {Item} from '../../interfaces/ICard';


const appData = [
  {name: "bishop", type: "healerMass", image: "path",health: 130, initiative:50},
  {name: "skeleton", type: "melee", image: "path",health: 130, initiative:50},
  {name: "archimage", type: "mage", image: "path",health: 130, initiative:50},
  {name: "bandit", type: "range", image: "path",health: 230, initiative:50},
  {name: "bandit", type: "range", image: "path",health: 630, initiative:50},
  {name: "bishop", type: "healerMass", image: "path",health: 80, initiative:50},
  {name: "skeleton", type: "melee", image: "path",health: 30, initiative:50},
  {name: "archimage", type: "mage", image: "path",health: 30, initiative:50},
  {name: "bandit", type: "range", image: "path",health: 30, initiative:50},
  {name: "bandit", type: "range", image: "path",health: 30, initiative:50},
  {name: "skeleton", type: "melee", image: "path",health: 30, initiative:50},
  {name: "archimage", type: "mage", image: "path",health: 30, initiative:50},
];
class OpponentMass implements IOpponentBehavior {
  allTeam: Item[];
  fTeam: Item[];
  sTeam: Item[];

  constructor() {
    this.allTeam = appData;
    const half = this.allTeam.length / 2;
    this.fTeam = appData.slice(0, half);
    this.sTeam = appData.slice(half);
  }


  public amount(data: number) : Item[] { //activeTeam
    return data === 1? this.sTeam : this.fTeam;
  }
}

export default OpponentMass;
