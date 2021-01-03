import {Pointer} from "./Node/Pointer";
import {State} from "./Node/State";
import {Action, Actor, Guard} from "./Actor";
import {NodeDefinition, isPointerNodeDefinition, isTransitionNodeDefinition} from "./Node/Definition";
import {Node} from "./Node/BaseNode";
import {ActionState} from "./Node/ActionState";
import {Parent} from "./Node/Parent";

/**
 * The tree generator.  Instantiate and then call generateTree(),
 * passing the JSON definition of the tree and the object the tree controls.
 */
export class Machine {
  public generateTree<ActorInterface>(treeJson: NodeDefinition<keyof ActorInterface>, actor: Actor<ActorInterface>) {
    return this.read<ActorInterface>(treeJson, null, actor);
  }

  protected read<ActorInterface>(subTreeJson: NodeDefinition<keyof ActorInterface>, parent: Parent | null, actor: Actor<ActorInterface>): Node {
    if (isPointerNodeDefinition(subTreeJson)) {
      return new Pointer(
        subTreeJson.identifier.toString(),
        actor[subTreeJson.identifier] as Guard,
        parent,
        subTreeJson.strategy,
      );
    }

    if (isTransitionNodeDefinition<keyof ActorInterface>(subTreeJson)) {
      const node = new State(
        subTreeJson.identifier.toString(),
        actor[subTreeJson.identifier] as Guard,
        parent,
        subTreeJson.strategy,
      );
      for (let i = 0; i < subTreeJson.children.length; i++) {
        node.addChild(this.read<ActorInterface>(subTreeJson.children[i], node, actor));
      }
      return node;
    }

    return new ActionState(
      subTreeJson.identifier.toString(),
      actor[subTreeJson.identifier] as Action,
      parent,
      subTreeJson.strategy,
    );
  }
}
