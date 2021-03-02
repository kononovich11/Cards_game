import IActionBahavior from './IActionBahavior';

class HealActionBehavior implements IActionBahavior { //IHealActionBehavior
  heal: number;
  //opponent

  constructor() {
    this.heal = 0;
  }

  public action(data: number): number {
    this.heal = data;
    //opponent.health += this.heal;
    // return opponent
    return data;
  }
}

export default HealActionBehavior;