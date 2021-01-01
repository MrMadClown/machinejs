import {Node} from "./BaseNode";

export interface Transition extends Node {
  transition(): Node | null;
}

export function isTransition(node: any): node is Transition {
  return typeof node.transition === 'function';
}

export function transition(node: Node): Node | null {
  return isTransition(node)
    ? node.transition()
    : node;
}
