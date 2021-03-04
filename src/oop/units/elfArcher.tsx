import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import ContextOpponentBahavior from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import OpponentSingle from '../behaviors/behaviorOpponentStrategy/opponentBahaviorSingle';
import DemageActionBehavior from '../behaviors/behaviorActionStrategy/demageActionBehavior';



class ElfArcher extends CommonUnit {

  actionBehavior: ContextActionBahavior;
  healthValue: IHealthBehavior;
  // resOfAction: any;

  constructor() {
    super('elfArcher', 'range', 'path', 60);
    this.healthValue = new HealthBehavior(90);
    this.actionBehavior = new ContextActionBahavior(new DemageActionBehavior());
    // this.resOfAction = this.actionBehavior.realizeActionBehavior(45,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

  realizeAction() {
    return this.actionBehavior.realizeActionBehavior(45,  new ContextOpponentBahavior(new OpponentSingle()).realizeOpponentBehavior(1));
  }

}


export default ElfArcher;

// 4. Elf Archer
// ○ Unit type - range
// ○ HP = 90
// ○ Damage = 45
// ○ Initiative = 60
