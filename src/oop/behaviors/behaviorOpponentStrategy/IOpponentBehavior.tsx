import Item from '../../interfaces/IItem';


interface IOpponentBehavior {
  amount(data: Item[]) : Item[];
}

export default IOpponentBehavior;