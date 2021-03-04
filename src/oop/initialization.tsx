import UnitFactory from './factories/unitFactory';
import {Item} from '../oop/interfaces/ICard';


const Initialization = () => {

  const unitsTypes : string[] = ['skeleton','centaur','bandit','elfArcher','skeletonMage','archimage','monk','bishop','sirena'];

  const generateUnits = (unitsTypes: string[]) => {
    const unitsFactory = new UnitFactory();
    let renderUnits: any = []; //????

    for (let i = 0; i < 12; i++) {
      const randomIndex: number = Math.round(+Math.random().toFixed(1) * 8);
      const randomType: string = unitsTypes[randomIndex];
      const randomUnit = unitsFactory.create(randomType);
      renderUnits?.push(randomUnit);
    }

    return renderUnits;
  }

  const generatedUnits = generateUnits(unitsTypes);
  return generatedUnits;
}

export default Initialization;
