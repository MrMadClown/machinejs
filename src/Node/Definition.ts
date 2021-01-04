import {Strategy} from "../Strategy";

export type NodeDefinition<States> = {
  readonly identifier: States;
  readonly strategy?: Strategy | null;
}

export type TransitionNodeDefinition<States> = NodeDefinition<States> & {
  readonly children: Array<NodeDefinition<States> | PointerNodeDefinition<States> | TransitionNodeDefinition<States>>;
}
export type PointerNodeDefinition<States> = NodeDefinition<States> & {
  readonly pointer: boolean;
}

export function isPointerNodeDefinition<States>(node: any): node is PointerNodeDefinition<States> {
  return node.pointer === true;
}

export function isTransitionNodeDefinition<States>(node: any): node is TransitionNodeDefinition<States> {
  return Array.isArray(node.children);
}
