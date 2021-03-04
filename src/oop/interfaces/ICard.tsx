import IDemageBehavior from './behaviors/IDemageBehavior';
import IHealthBehavior from './behaviors/IHealthBehavior';
import IActionBahavior from '../../oop/behaviors/behaviorActionStrategy/IActionBahavior'
export interface ICard {
  demageValue: IDemageBehavior,
  healthValue: IHealthBehavior,
  image: string,
  name: string,
  type: string,
}

// export default ICard;


export interface Item {
  // damage: number,
  health: number,
  // id: number,
  image: string,
  initiative: number,
  name: string,
  type: string,
  // realizeAction: any;
}


