import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import IActionBahavior from '../behaviors/behaviorActionStrategy/IActionBahavior';
import ContextActionBahavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';
import DemageActionBehavior from '../behaviors/behaviorActionStrategy/demageActionBehavior';
import ContextOpponentAction from '../behaviors/behaviorOpponentStrategy/contextOpponentBehavior';
import OpponentMass from '../behaviors/behaviorOpponentStrategy/opponentBehaviorMass';
import Item from '../interfaces/IItem';

class clItem implements Item {
  damage: number;
  health: number;
  id: number;
  initiative: number;
  type: string;
  image: string;
  name: string;
  constructor(damage: number, health: number, id: number, image: string, initiative: number, name: string, type: string) {
    this.damage = damage;
    this.health = health;
    this.id = id;
    this.image = image;
    this.initiative = initiative;
    this.name = name;
    this.type = type;
  }
}

class Bandit extends CommonUnit {

  context: ContextActionBahavior;
  healthValue: IHealthBehavior;
  action: IActionBahavior;
  damage: number;
  opponent: Item[];


  constructor() {
    super('bandit', 'range', 'path');
      this.action = new DemageActionBehavior();
      this.context = new ContextActionBahavior(this.action);
      this.opponent = new ContextOpponentAction(new OpponentMass()).realizeOpponentBehavior([opp]);
      this.damage = this.context.realizeActionBehavior(30, this.opponent);
      this.healthValue = new HealthBehavior(75);
  }

  realizeActionBehavior() {
   // const contectActionBehavior = new ContextActionBahavior(new DemageActionBehavior()).realizeActionBehavior(30);
    //const massOpponent = new ContextOpponentAction(new OpponentMass()).realizeOpponentBehavior([opp]);
    //console.log(contectActionBehavior, massOpponent);
  }
}


export default Bandit;


const opp = new clItem(25,50,25,'heh',2,'lol,lol','lol')

console.log(new ContextOpponentAction(new OpponentMass()).realizeOpponentBehavior([opp]));
