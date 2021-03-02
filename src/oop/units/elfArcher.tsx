import CommonUnit from './commonUnit';
import HealthBehavior from '../behaviors/healthBehavior';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

class ElfArcher extends CommonUnit {

  healthValue: IHealthBehavior;

  constructor() {
    super('elfArcher', 'range', 'path');
    this.healthValue = new HealthBehavior(90);
  }

}


export default ElfArcher;