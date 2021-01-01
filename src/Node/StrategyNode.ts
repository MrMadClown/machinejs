import {BaseNode, Node, Strategy} from "./BaseNode";
import {Action, Guard} from "../Actor";
import {Parent} from "./Parent";

export interface NodeWithStrategy extends Node {
  readonly _strategy: Strategy;
}

export function isNodeWithStrategy(node: any): node is NodeWithStrategy {
  return !!node._strategy;
}

export class StrategyNode extends BaseNode {
  public readonly _strategy: Strategy | undefined;

  public constructor(identifier: string, action: Action | Guard, parent?: Parent, strategy?: Strategy) {
    super(identifier, action, parent);
    this._strategy = strategy;
  }

  protected get strategy(): Strategy | null {
    if (this._strategy) {
      return this._strategy;
    }
    return this.getStrategyFromNearestAncestor();
  }
}
