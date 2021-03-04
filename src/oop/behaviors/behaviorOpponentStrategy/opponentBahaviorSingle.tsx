import IOpponentBehavior from './IOpponentBehavior';
import {Item, } from '../../interfaces/ICard';


class OpponentSingle implements IOpponentBehavior {
  currentOpponent: Item;

  constructor() {
    this.currentOpponent = {name: "archimage", type: "mage", image: "path", health: 100,  initiative: 60}; //get current opponent
  }


  public amount(data: number) : Item[] { //activeTeam
    return [this.currentOpponent];
  }
}

export default OpponentSingle;