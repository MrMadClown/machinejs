import {Transition} from "./Transition";
import {Parent} from "./Parent";
import {StrategyNode} from "./StrategyNode";
import {Guard} from "../Actor";
import {Strategy} from "../Strategy";
import {Node} from "./Node";

/**
 * A pointer state in the tree.  Directs the actor to a synonymous state
 * further up the tree.  Which synonymous state the actor transitions to
 * is dependent on the pointer's strategy.
 */
export class Pointer extends StrategyNode implements Transition {
  protected action: Guard | null;
  public readonly parent: Parent;

  public constructor(identifier: string, action: Guard | null, parent?: Parent, strategy?: Strategy | null) {
    super(identifier, action, parent, strategy);
  }

  protected get strategy(): Strategy | null {
    if (this._strategy) {
      return this._strategy;
    }
    return this.getStrategyFromNearestAncestor();
  }

  // transition out of this state using the state's strategy
  public transition(): Node | null {
    return this[this.strategy]();
  }
}
