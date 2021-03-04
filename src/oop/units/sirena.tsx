import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import OpponentSingle from '../behaviors/behaviorOpponentStrategy/opponentBahaviorSingle';
import ParalizeActionBehavior from '../behaviors/behaviorActionStrategy/paralizeActionBehavior';


class Sirena extends CommonUnit {

  healthValue: IHealthBehavior;
  actionBehavior: ContextActionBahavior;
  resOfAction: any;

  constructor() {
    super('sirena', 'paralyzer', 'path', 20);
    this.healthValue =  new HealthBehavior(80);
    this.actionBehavior = new ContextActionBahavior(new ParalizeActionBehavior());
    // this.resOfAction = this.actionBehavior.realizeActionBehavior(0,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(0,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

}

export default Sirena;

// 9. Sirena
// ○ Unit type - paralyzer
// ○ HP = 80
// ○ Damage = no damage because it paralyzes.
// ○ Initiative = 20
