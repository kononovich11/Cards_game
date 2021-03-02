import IHealthBehavior from '../interfaces/behaviors/IHealthBehavior';
import ContextOpponentBahavior from './behaviorOpponentStrategy/contextOpponentBehavior';

class HealthBehavior implements IHealthBehavior{
  healthValue: number;

  constructor(healthValue: number,) {
    this.healthValue = healthValue;
  }

  getHealthValue() {
    return this.healthValue;
  };

  setHealthValue(healthValue: number) {
    this.healthValue = healthValue;
  };
}

export default HealthBehavior;

//increaseValue