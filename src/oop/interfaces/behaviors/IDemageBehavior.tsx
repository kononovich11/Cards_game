import {Item} from "../ICard";

interface IDemageBehavior {
  demageValue: number;

  getDemageValue() : number;
  setDemageValue(demageValue: number) : void;

  halfOfDemage(opponent: Item) : Item;
}

export default IDemageBehavior;