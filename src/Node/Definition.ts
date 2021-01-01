import {Strategy} from "./BaseNode";

export type NodeDefinition<States> = {
  readonly identifier: States;
}

export type TransitionNodeDefinition<States> = NodeDefinition<States> & {
  readonly children: Array<NodeDefinition<States>>;
  readonly strategy: Strategy;
}
export type PointerNodeDefinition<States> = NodeDefinition<States> & {
  readonly pointer: boolean;
  readonly strategy: Strategy;
}

export function isPointerNodeDefinition<States>(node: any): node is PointerNodeDefinition<States> {
  return node.pointer === true;
}

export function isTransitionNodeDefinition<States>(node: any): node is TransitionNodeDefinition<States> {
  return Array.isArray(node.children);
}
