import IOpponentBehavior from './IOpponentBehavior';

class ContextOpponentBahavior {
  private opponentBehavior: IOpponentBehavior;

  constructor(opponentBehavior: IOpponentBehavior) {
    this.opponentBehavior = opponentBehavior;
  }

  public setOpponentBehavior(opponentBehavior: IOpponentBehavior) {
    this.opponentBehavior = opponentBehavior;
  }

  public realizeOpponentBehavior(activeTeam: number) {
    return this.opponentBehavior.amount(activeTeam);
  }
}

export default ContextOpponentBahavior;