import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';

interface ICommonUnit {
  name: string,
  type: string;
  image: string,
  // healthValue: IHealthBehavior;

  getName() : string;
  getType() : String;
  getImage(): string;
}

export default ICommonUnit;