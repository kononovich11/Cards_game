import ICommonUnit from '../interfaces/ICommonUnit';

class CommonUnit implements ICommonUnit {
  name: string;
  type: string;
  image: string;
  initiative: number;
  // healthValue: IHealthBehavior;

  constructor(name: string, type: string, image: string, initiative: number) {
    this.name = name;
    this.type = type;
    this.image = image;
    this.initiative = initiative;
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
  }
}

export default CommonUnit;