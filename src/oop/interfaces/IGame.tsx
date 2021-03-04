import {Item} from './ICard';

export interface IGame {
  dataRenderUnits: Item[];
  firstTeam: Item[];
  secondTeam: Item[];
  activeTeam: number;
  dataCurrentTeam: Item[];
  round: number;
  startGame() : Item[];
}