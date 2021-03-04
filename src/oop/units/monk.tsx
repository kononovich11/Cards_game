import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import HealActionBehavior from '../behaviors/behaviorActionStrategy/healActionBehavior';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import OpponentSingle from '../behaviors/behaviorOpponentStrategy/opponentBahaviorSingle';

class Monk extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  resOfAction: any;

  constructor() {
    super('monk', 'healerSingle', 'path', 20);
    this.healthValue = new HealthBehavior(40);
    this.actionBehavior = new ContextActionBahavior(new HealActionBehavior());
    // this.resOfAction = this.actionBehavior.realizeActionBehavior(40,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    this.actionBehavior.realizeActionBehavior(40,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

}


export default Monk;

// . Monk
// ○ Unit type - healer (single)
// ○ HP = 90
// ○ Heal = 40
// ○ Initiative = 20