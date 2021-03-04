import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import DemageActionBehavior from '../behaviors/behaviorActionStrategy/demageActionBehavior';
import OpponentSingle from '../behaviors/behaviorOpponentStrategy/opponentBahaviorSingle';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';


class Bandit extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  // resOfAction: any;


  constructor() {
    super('bandit', 'range', 'path', 60);
      this.healthValue = new HealthBehavior(75);
      this.actionBehavior = new ContextActionBahavior(new DemageActionBehavior());
      // this.resOfAction = this.actionBehavior.realizeActionBehavior(30,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(30,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }
}


export default Bandit;


// Bandit
// ○ Unit type - range
// ○ HP = 75
// ○ Damage = 30
// ○ Initiative = 60