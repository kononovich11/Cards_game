import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Bishop extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('bishop', 'healerMass', 'path');
    this.healthValue = new HealthBehavior(130);
  }

}


export default Bishop;