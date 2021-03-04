import IActionBahavior from './IActionBahavior';
import {Item} from '../../interfaces/ICard';


class ParalizeActionBehavior implements IActionBahavior { //implements IActionBahavior

  contextOpponent: any;
  opponentMass: any;
  strategyMassRes: any;

  public action(data: number, strategy: any): Item[] {
    return strategy;
  }
}

export default ParalizeActionBehavior;