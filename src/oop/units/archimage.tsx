import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class Archimage extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('archimage', 'mage', 'path');
    this.healthValue = new HealthBehavior(90);
  }

}


export default Archimage;