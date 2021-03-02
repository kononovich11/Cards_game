import IOpponentBehavior from './IOpponentBehavior';
import Item from '../../interfaces/IItem';


class clItem implements Item { //for test
  damage: number;
  health: number;
  id: number;
  initiative: number;
  type: string;
  image: string;
  name: string;
  constructor(damage: number, health: number, id: number, image: string, initiative: number, name: string, type: string) {
    this.damage = damage;
    this.health = health;
    this.id = id;
    this.image = image;
    this.initiative = initiative;
    this.name = name;
    this.type = type;
  }
}

class ContextOpponentBahavior {
  private opponentBehavior: IOpponentBehavior;

  constructor(opponentBehavior: IOpponentBehavior) {
    this.opponentBehavior = opponentBehavior;
  }

  public setOpponentBehavior(opponentBehavior: IOpponentBehavior) {
    this.opponentBehavior = opponentBehavior;
  }

  public realizeOpponentBehavior(opponent: clItem[]) {
    console.log('OpponentBehavior');
    return this.opponentBehavior.amount(opponent);
  }
}

export default ContextOpponentBahavior;