import IActionBahavior from './IActionBahavior';
import {Item} from '../../interfaces/ICard';

class HealActionBehavior implements IActionBahavior {
  heal: number;

  constructor() {
    this.heal = 0;
  }

  public action(data: number, stratagy: Item[]): Item[] {
    this.heal = data;
    const dataOpponent = stratagy;
    const stratagyRes = dataOpponent.map((item : Item) => {
      item.health += this.heal;
      return item;
    });

    return stratagyRes;
  }
}

export default HealActionBehavior;