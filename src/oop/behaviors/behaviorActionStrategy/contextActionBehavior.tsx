import IActionBahavior from './IActionBahavior';
import Item from '../../interfaces/IItem';


class ContextActionBahavior {
  private actionBehavior: IActionBahavior;

  constructor(actionBehavior: IActionBahavior) {
    this.actionBehavior = actionBehavior;
  }

  public setActionBehavior(actionBehavior: IActionBahavior) {
    this.actionBehavior = actionBehavior;
  }

  public realizeActionBehavior(value: number, opponent: Item[]) {
    console.log('context');
    return this.actionBehavior.action(value);
  }
}

export default ContextActionBahavior;