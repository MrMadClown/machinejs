import {BaseNode, Strategy, Node} from "./BaseNode";
import {Action} from "../Actor";
import {Parent} from "./Parent";

export class ActionState extends BaseNode {
  protected action: Action;
  public readonly parent: Parent;

  public constructor(identifier: string, action: Action, parent: Parent) {
    super(identifier, action, parent);
  }

  public tick(): Node {
    this.run();
    return super.tick();
  }

  // run the behaviour associated with this state
  protected run(): void {
    this.action.run();
  }

  protected [Strategy.sequential](): Node | null {
    let foundThis = false;
    const siblings = this.parent.getChildren();
    for (let i = 0; i < siblings.length; i++) {
      const sibling = siblings[i];
      if (this.identifier == sibling.identifier) {
        foundThis = true;
      } else if (foundThis && sibling.can()) {
        return sibling;
      }
    }
    return this.nearestRunnableAncestor(); // no more runnable children in the sequence so return first runnable ancestor
  }
}
