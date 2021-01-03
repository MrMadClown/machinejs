import {Node} from "./Node";
import {NodeWithStrategy} from "./StrategyNode";

export interface Parent extends NodeWithStrategy {
  getChildren(): Array<Node>;
}
