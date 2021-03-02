import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Monk extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('monk', 'healerSingle', 'path');
    this.healthValue = new HealthBehavior(90);
  }

}


export default Monk;