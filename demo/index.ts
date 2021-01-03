import {LandScape, LandScapeActor, LandScapeStates} from "./LandScape";
import {Oak, OakActor, OakStates} from "./Oak";
import {Machine} from "../src/Machine";
import {Strategy} from "../src/Strategy";

// the json that defines the trees that control the actors
const oakJson = {
  identifier: OakStates.idle, strategy: Strategy.prioritised,
  children: [
    {
      identifier: OakStates.photosynthesise, strategy: Strategy.sequential,
      children: [
        {identifier: OakStates.makeEnergy},
        {identifier: OakStates.grow},
        {identifier: OakStates.emitOxygen},
      ]
    },
    {identifier: OakStates.gatherSun},
    {identifier: OakStates.gatherWater},
  ]
};

const landscapeJson = {
  identifier: LandScapeStates.idle, strategy: Strategy.sequential,
  children: [
    {identifier: LandScapeStates.shine},
    {identifier: LandScapeStates.rain},
  ]
};

// set up the actors
const landscape = new LandScape(); // one actor
const oak = new Oak(landscape); // the other actor in this drama

// make instance of Machine and get the root nodes for each actor
const machine = new Machine();
oak.state = machine.generateTree<OakActor>(oakJson, oak);
landscape.state = machine.generateTree<LandScapeActor>(landscapeJson, landscape);

const step = function () {
  console.log("Oak:       ", oak.state.identifier, "|", oak.height, "m tall |", oak.water, "water |", oak.sun, "sun");
  console.log("Landscape: ", landscape.state.identifier, "|", landscape.groundwater, "groundwater");
  console.log();

  // trigger the next state transitions
  oak.state = oak.state.tick();
  landscape.state = landscape.state.tick();
}
// every second, something happens in the ecosystem
setInterval(() => step(), 1000)
