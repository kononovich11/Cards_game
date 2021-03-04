import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import HealActionBehavior from '../behaviors/behaviorActionStrategy/healActionBehavior';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import OpponentMass from '../behaviors/behaviorOpponentStrategy/opponentBehaviorMass';


class Bishop extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  // resOfAction: any;

  constructor() {
    super('bishop', 'healerMass', 'path', 20);
    this.healthValue = new HealthBehavior(130);
    this.actionBehavior = new ContextActionBahavior(new HealActionBehavior());
    // this.resOfAction = this.actionBehavior.realizeActionBehavior(25,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(25,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));
  }
}


export default Bishop;

// Unit type - healer (mass)
// ○ HP = 130
// ○ Heal = 25
// ○ Initiative = 20