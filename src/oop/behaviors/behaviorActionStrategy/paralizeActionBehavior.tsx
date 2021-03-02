import IActionBahavior from './IActionBahavior';


class ParalizeActionBehavior implements IActionBahavior {
  public action(data: number): number {
    //
    return data;
  }
}

export default ParalizeActionBehavior;