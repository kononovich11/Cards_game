import Initialization from '../initialization';
import {Item} from '../interfaces/ICard';
import {IGame} from '../interfaces/IGame';
import Round from '../round/round';

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

  // startRound() {
  //   const round = new Round({dataRenderUnits, activeTeam, });
  //   round.realize();
  // }

  getInfo() {
    return {
      round: this.round,
      team: this.activeTeam,
      dataCurrentTeam: this.dataCurrentTeam,
    }
  }
}

export default Game;