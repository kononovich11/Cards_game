interface IHealthBehavior {
  healthValue: number;

  getHealthValue() : number;
  setHealthValue(healthValue: number) : void;
}

export default IHealthBehavior;