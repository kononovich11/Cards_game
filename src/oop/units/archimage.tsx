import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import OpponentMass from '../behaviors/behaviorOpponentStrategy/opponentBehaviorMass';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import DemageActionBehavior from '../behaviors/behaviorActionStrategy/demageActionBehavior';


class Archimage extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  // resOfAction: any;

  constructor() {
    super('archimage', 'mage', 'path', 40);
    this.healthValue = new HealthBehavior(90);
    this.actionBehavior = new ContextActionBahavior(new DemageActionBehavior());
    //this.resOfAction = this.actionBehavior.realizeActionBehavior(30,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(30,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));
  }
}


export default Archimage;

// . Archimage
// ○ Unit type - mage
// ○ HP = 90
// ○ Damage = 30
// ○ Initiative = 40