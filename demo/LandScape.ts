import {Node} from "../src/Node/Node";
import {GuardedAction} from "../src/Actor";

export enum LandScapeStates {
  idle = 'idle',
  shine = 'shine',
  rain = 'rain',
}

export interface LandScapeActor {
  [LandScapeStates.idle]: null;
  [LandScapeStates.shine]: ShineAction;
  [LandScapeStates.rain]: RainAction;
}

export class LandScape implements LandScapeActor {
  public state: Node | null;
  public groundwater: number;
  public oxygen: number;

  public [LandScapeStates.idle]: null;
  public [LandScapeStates.shine]: ShineAction;
  public [LandScapeStates.rain]: RainAction;

  constructor() {
    this.state = null;
    this.groundwater = 0;
    this.oxygen = 0;

    this.shine = new ShineAction(this);
    this.rain = new RainAction(this);
  }

  public isShining() {
    return this.state.identifier == "shine";
  }

  public hasWater() {
    return this.groundwater > 0;
  }

  public giveWater() {
    this.groundwater -= 1;
    return 1;
  }

  public oxygenate() {
    this.oxygen += 1;
  }
}

class RainAction implements GuardedAction {
  public constructor(private landScape: LandScape) {
  }

  public can(): boolean {
    return Math.random() > 0.5;
  }

  public run(): void {
    this.landScape.groundwater += 1;
  }
}

class ShineAction implements GuardedAction {
  public constructor(private landScape: LandScape) {
  }

  public can(): boolean {
    return Math.random() > 0.1;
  }

  public run(): void {
  }
}
