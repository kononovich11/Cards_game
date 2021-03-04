import IActionBahavior from './IActionBahavior';

class ContextActionBahavior {
  private actionBehavior: IActionBahavior;

  constructor(actionBehavior: IActionBahavior) {
    this.actionBehavior = actionBehavior;
  }

  public setActionBehavior(actionBehavior: IActionBahavior) {
    this.actionBehavior = actionBehavior;
  }

  public realizeActionBehavior(value: number, strategy: any) {
    return this.actionBehavior.action(value, strategy);
  }
}

export default ContextActionBahavior;