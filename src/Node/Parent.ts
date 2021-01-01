import {Node} from "./BaseNode";
import {NodeWithStrategy} from "./StrategyNode";

export interface Parent extends NodeWithStrategy {
  getChildren(): Array<Node>;
}
