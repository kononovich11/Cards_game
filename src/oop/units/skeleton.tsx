import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Skeleton extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('skeleton', 'melee', 'path', 50);
    this.healthValue = new HealthBehavior(100);
  }

}

// ○ Unit type - melee
// ○ HP = 100
// ○ Damage = 25
// ○ Initiative = 50


export default Skeleton;