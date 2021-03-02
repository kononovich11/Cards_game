import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';


class SkeletonMage extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('skeletonMage', 'mage', 'path');
    this.healthValue = new HealthBehavior(50);
  }

}


export default SkeletonMage;