import {ICard, Item} from '../../interfaces/ICard';


interface IOpponentBehavior {
  amount(data: number) : Item[];
}

export default IOpponentBehavior;