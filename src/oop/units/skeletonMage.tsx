import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import OpponentMass from '../behaviors/behaviorOpponentStrategy/opponentBehaviorMass';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import DemageActionBehavior from '../behaviors/behaviorActionStrategy/demageActionBehavior';

class SkeletonMage extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  resOfAction: any;

  constructor() {
    super('skeletonMage', 'mage', 'path', 40);
    this.healthValue = new HealthBehavior(50);
    this.actionBehavior = new ContextActionBahavior(new DemageActionBehavior());
    // this.resOfAction = this.actionBehavior.realizeActionBehavior(20,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));

  }
  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(20,  new ContextOpponentBahavior(new OpponentMass()).realizeOpponentBehavior(1));
  }

}


export default SkeletonMage;

// 5. Skeleton mage
// ○ Unit type - mage
// ○ HP = 50
// ○ Damage = 20
// ○ Initiative = 40
