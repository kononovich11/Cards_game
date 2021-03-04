import IDemageBehavior from '../interfaces/behaviors/IDemageBehavior';
import {Item, ICard} from '../interfaces/ICard';
//import Initialization from '../initialization';

// const dataApp = Initialization();

class DemageBehavior implements IDemageBehavior{
  demageValue: number;

  constructor(demageValue: number,) {
    this.demageValue = demageValue;
  }

  getDemageValue(): number {
    return this.demageValue;
  };

  setDemageValue(demageValue: number): void {
    this.demageValue = demageValue;
  };

  halfOfDemage(opponent: Item) {
    //opponent.healthValue -= this.demageValue / 2;
    return opponent;
  }

}

export default DemageBehavior;