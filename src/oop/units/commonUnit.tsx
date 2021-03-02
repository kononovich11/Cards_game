import ICommonUnit from '../interfaces/ICommonUnit';
import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import contextActionBehavior from '../behaviors/behaviorActionStrategy/contextActionBehavior';

class CommonUnit implements ICommonUnit {
  name: string;
  type: string;
  image: string;
  // healthValue: IHealthBehavior;

  constructor(name: string, type: string, image: string) {
    this.name = name;
    this.type = type;
    this.image = image;
    // this.healthValue  = healthValue
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getImage() {
    return this.image;
  }

  realization(opponent: object[]) {
    console.log('realize current unit');
    // console.log(new contextActionBehavior())
  }
}

export default CommonUnit;