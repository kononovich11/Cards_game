import Skeleton from '../units/skeleton';
import Bandit from '../units/bandit';
import Centaur from '../units/centaur';
import elfArcher from '../units/elfArcher';
import skeletonMage from '../units/skeletonMage';
import Archimage from '../units/archimage';
import Monk from '../units/monk';
import Bishop from '../units/bishop';
import Sirena from '../units/sirena';

class UnitFactory {
  create(type: string) {
    switch(type) {
      case 'skeleton': return new Skeleton();
      case 'centaur': return new Centaur();
      case 'bandit': return new Bandit();
      case 'elfArcher': return new elfArcher();
      case 'skeletonMage': return new skeletonMage();
      case 'archimage': return new Archimage();
      case 'monk': return new Monk();
      case 'bishop': return new Bishop();
      case 'sirena': return  new Sirena();
    }
  }
}

export default UnitFactory;