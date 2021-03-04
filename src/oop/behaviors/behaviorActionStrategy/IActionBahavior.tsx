import {Item} from '../../interfaces/ICard';

interface IActionBahavior {
  action(data: number, strategy: any): Item[];
}

export default IActionBahavior;