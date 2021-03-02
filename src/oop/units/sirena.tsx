import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';


class Sirena extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('sirena', 'paralyzer', 'path');
    this.healthValue =  new HealthBehavior(80);
  }

}


export default Sirena;