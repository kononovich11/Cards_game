import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Skeleton extends CommonUnit {

  // damage: number = 25;
  healthValue: IHealthBehavior;

  constructor() {
    super('skeleton', 'melee', 'path');
    this.healthValue = new HealthBehavior(100);
  }

}


export default Skeleton;