import {Action, Guard, isGuard} from "../Actor";
import {transition} from "./Transition";
import {Parent} from "./Parent";
import {isNodeWithStrategy, NodeWithStrategy} from "./StrategyNode";

export enum Strategy {
  hereditary = 'hereditary',
  prioritised = 'prioritised',
  sequential = 'sequential',
}

type TestFN = (node: Node) => boolean;
type AssertFN<N extends Node> = (node: Node) => node is N;

export interface Node {
  readonly identifier: string;

  tick(): Node;

  can(): boolean;

  getRootNode(): Parent;

  nearestAncestor<N extends Node>(test: TestFN | AssertFN<N>): N | null
}

/**
 * The object for nodes in the tree.
 */
export abstract class BaseNode implements Node {
  public readonly identifier: string;
  protected action: Action | Guard | null;

  public readonly parent: Parent | undefined;

  protected constructor(identifier: string, action: Action | Guard | null, parent?: Parent) {
    this.identifier = identifier;
    this.action = action;

    this.parent = parent;
  }

  protected getStrategyFromNearestAncestor(): Strategy | null {
    const ancestor = this.nearestAncestorWithStrategy();
    if (ancestor !== null) {
      return ancestor._strategy;
    }

    return null;
  }

  protected get strategy(): Strategy | null {
    return this.getStrategyFromNearestAncestor();
  }

  /**
   * A tick of the clock.  Returns the next state.
   */
  public tick(): Node {
    const potentialNextState = this.nextState();

    if (potentialNextState !== null) {
      return transition(potentialNextState);
    }

    if (this.can()) {
      // no child state, try and stay in this one
      return this;
    }

    // can't stay in this one, so back up the tree
    return transition(this.nearestRunnableAncestor());
  }

  /**
   * gets next state that would be moved to from current state
   */
  protected nextState(): Node | null {
    if (this.strategy !== null) {
      return this[this.strategy]();
    } else {
      return null;
    }
  }

  /**
   * returns true if actor allowed to enter this state
   */
  public can(): boolean {
    return isGuard(this.action) ? this.action.can() : true;
  }

  /**
   * switches state to direct child of root state with passed identifier
   * use very sparingly - really only for important events that
   * require machine to temporarily relinquish control over actor
   * e.g. a soldier who is mostly autonomous, but occasionally receives orders
   */
  public warp(identifier: string): Node {
    const rootNodeChildren = this.getRootNode().getChildren();
    for (let i = 0; i < rootNodeChildren.length; i++) {
      if (rootNodeChildren[i].identifier == identifier) {
        return rootNodeChildren[i];
      }
    }
    return this; // couldn't find node - stay in current state
  }

  /**
   * returns first child that can run
   */
  protected [Strategy.prioritised](): Node | null {
    return this.nextRunnable(this.parent.getChildren());
  }

  /**
   * runs all runnable children in order, then kicks up to children's closest runnable ancestor
   */
  protected [Strategy.sequential](): Node | null {
    return this.nearestRunnableAncestor();
  }

  // a strategy that moves to the first synonymous ancestor
  public [Strategy.hereditary](): Node {
    return this.nearestNamesakeAncestor(this.identifier);
  }

  /**
   * gets next runnable node in passed list
   */
  protected nextRunnable(nodes: Array<Node>): Node | null {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].can()) {
        return nodes[i];
      }
    }

    return null;
  }

  /**
   * returns first namesake forebear encountered when going directly up tree
   */
  public nearestAncestor<N extends Node>(test: TestFN | AssertFN<N>): N | null {
    if (this.parent === null) {
      return null;
    }

    if (test(this.parent) === true) {
      // @ts-ignore
      return this.parent;
    }

    return this.parent.nearestAncestor<N>(test);
  }

  /**
   * returns root node of whole tree
   */
  public getRootNode(): Parent {
    return this.parent.getRootNode();
  }

  protected nearestAncestorWithStrategy(): NodeWithStrategy | null {
    return this.nearestAncestor(isNodeWithStrategy);
  }

  /**
   * returns nearest ancestor that can run
   */
  protected nearestRunnableAncestor(): Node | null {
    return this.nearestAncestor((node: Node) => node.can());
  }

  protected nearestNamesakeAncestor(identifier: string): Node | null {
    return this.nearestAncestor((node: Node) => node.identifier === identifier);
  }
}
