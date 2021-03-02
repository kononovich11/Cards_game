import Initialization from '../initialization';
import Item from '../interfaces/IItem';
import {IGame} from '../interfaces/IGame';

class Game implements IGame {
  dataRenderUnits: Item[];
  firstTeam: Item[];
  secondTeam: Item[];
  activeTeam: number;
  dataCurrentTeam: Item[];
  round: number;

  constructor() {
    this.activeTeam = 1;
    this.round = 1;
    this.dataRenderUnits = Initialization();
    const half:number = this.dataRenderUnits.length / 2;
    this.firstTeam = this.dataRenderUnits.slice(0, half);
    this.secondTeam = this.dataRenderUnits.slice(half);
    this.dataCurrentTeam = this.activeTeam === 1? this.firstTeam : this.secondTeam;
  }

  startGame() {
    return this.dataRenderUnits;
  }

  getInfo() {
    return {
      round: this.round,
      team: this.activeTeam,
      dataCurrentTeam: this.dataCurrentTeam,
    }
  }
}

export default Game;