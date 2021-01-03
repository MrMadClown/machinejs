import {Node, Strategy} from "./BaseNode";
import {Guard} from "../Actor";
import {Parent} from "./Parent";
import {StrategyNode} from "./StrategyNode";

/**
 *  A normal state in the tree.
 */
export class State extends StrategyNode implements Parent {
  protected action: Guard | null;
  protected children: Array<Node>;
  public readonly parent: Parent | undefined;

  public constructor(identifier: string, action: Guard | null, parent?: Parent, strategy?: Strategy|null) {
    super(identifier, action, parent, strategy);
    this.children = [];
  }

  public addChild(node: Node): void {
    this.children.push(node);
  }

  public getChildren(): Array<Node> {
    return this.children;
  }

  /**
   * returns first child that can run
   */
  protected [Strategy.prioritised](): Node | null {
    return this.nextRunnable(this.children);
  }

  protected [Strategy.sequential](): Node | null {
    const firstRunnableChild = this.nextRunnable(this.children);
    if (firstRunnableChild !== null) return firstRunnableChild;

    return this.nearestRunnableAncestor(); // no more runnable children in the sequence so return first runnable ancestor
  }

  /**
   * returns root node of whole tree
   */
  public getRootNode(): Parent {
    return this.parent
      ? this.parent.getRootNode()
      : this;
  }
}

