import IActionBahavior from './IActionBahavior';
import {Item} from '../../interfaces/ICard';
class DemageActionBehavior implements IActionBahavior {
  damage: number;

  constructor() {
    this.damage = 0;
  }

  public action(data: number, strategy: Item[]) : Item[] {
    this.damage = data;
    const dataOpponent = strategy;
    const strategyRes = dataOpponent.map((item : Item) => {
      item.health -= this.damage;
      return item;
    });
    return strategyRes;
  }
}

export default DemageActionBehavior;
