import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import DemageBehavior from '../behaviors/demageBehavior';
import IDemageBehavior from '../interfaces/behaviors/IDemageBehavior';

class Centaur extends CommonUnit {

  healthValue: IHealthBehavior;
  demageValue: IDemageBehavior;

  constructor() {
    super('centaur', 'melee', 'path', 50);
    this.healthValue = new HealthBehavior(150);
    this.demageValue = new DemageBehavior(50);
  }

}


export default Centaur;

// Centaur
// ○ Unit type - melee
// Melee unit 1
// Melee unit 4 (dead) Melee unit 5 (dead) Melee unit (dead)
// Melee unit 7 Melee unit 8 Melee unit 9
// ○ HP = 150
// ○ Damage = 50
// ○ Initiative = 50