import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Centaur extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('centaur', 'melee', 'path');
    this.healthValue = new HealthBehavior(150);
  }

}


export default Centaur;