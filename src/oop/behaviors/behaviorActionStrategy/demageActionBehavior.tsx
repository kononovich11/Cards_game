import IActionBahavior from './IActionBahavior';

class DemageActionBehavior implements IActionBahavior {
  damage: number;
  //opponent: Item[]

  constructor() {
    this.damage = 0;
  }

  public action(data: number) : number {
    this.damage = data;
    //opponent.health -= this.damage
    //return opponent
    return data;
  }
}

export default DemageActionBehavior;