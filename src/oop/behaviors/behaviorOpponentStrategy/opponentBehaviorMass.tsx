import IOpponentBehavior from './IOpponentBehavior';
import Item from '../../interfaces/IItem';


class OpponentMass implements IOpponentBehavior {
  allTeam: Item[];

  constructor() {
    this.allTeam = [];
  }


  public amount(data: Item[]) : Item[] {
    return data;
  }
}

export default OpponentMass;

