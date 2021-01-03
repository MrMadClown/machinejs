import {Parent} from "./Parent";

export type TestFN = (node: Node) => boolean;
export type AssertFN<N extends Node> = (node: Node) => node is N;

export interface Node {
  readonly identifier: string;

  tick(): Node;

  can(): boolean;

  getRootNode(): Parent;

  nearestAncestor<N extends Node>(test: TestFN | AssertFN<N>): N | null
}
