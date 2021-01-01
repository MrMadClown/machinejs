import {GuardedAction, Action, Actor} from "../src/Actor";
import {LandScape} from "./LandScape";
import {Node} from "../src/Node/BaseNode";

export enum OakStates {
  idle = 'idle',
  grow = 'grow',
  makeEnergy = 'makeEnergy',
  photosynthesise = 'photosynthesise',
  emitOxygen = 'emitOxygen',
  gatherSun = 'gatherSun',
  gatherWater = 'gatherWater',
}

export interface OakActor {
  [OakStates.idle]: null;
  [OakStates.grow]: GrowAction;
  [OakStates.makeEnergy]: MakeEnergyAction;
  [OakStates.photosynthesise]: PhotosynthesiseAction;
  [OakStates.emitOxygen]: EmitOxygenAction;
  [OakStates.gatherSun]: GatherSunAction;
  [OakStates.gatherWater]: GatherWaterAction;
}

// the oak object - sucks up water, photosynthesises, grows
export class Oak implements OakActor {
  public state: Node | null;
  public landscape: LandScape;
  public height: number;

  public energy: boolean;
  public oxygen: boolean;
  public water: number;
  public sun: number;

  public [OakStates.idle]: null;
  public [OakStates.grow]: GrowAction;
  public [OakStates.makeEnergy]: MakeEnergyAction;
  public [OakStates.photosynthesise]: PhotosynthesiseAction;
  public [OakStates.emitOxygen]: EmitOxygenAction;
  public [OakStates.gatherSun]: GatherSunAction;
  public [OakStates.gatherWater]: GatherWaterAction;

  constructor(landscape: LandScape) {
    this.state = null;
    this.landscape = landscape;

    this.height = 1;

    this.energy = false;
    this.oxygen = false;
    this.water = 0;
    this.sun = 0;

    this.grow = new GrowAction(this);
    this.makeEnergy = new MakeEnergyAction(this);
    this.photosynthesise = new PhotosynthesiseAction(this);
    this.emitOxygen = new EmitOxygenAction(this);
    this.gatherSun = new GatherSunAction(this);
    this.gatherWater = new GatherWaterAction(this);
  }

  public hasSun(): boolean {
    return this.sun > 0;
  }

  public hasWater(): boolean {
    return this.water > 0;
  }
}

class MakeEnergyAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  public can(): boolean {
    return this.oak.hasSun() && this.oak.hasWater();
  }

  public run(): void {
    this.oak.sun -= 1;
    this.oak.water -= 1;
    this.oak.energy = true;
  }
}

class GrowAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  public can(): boolean {
    return this.oak.energy;
  }

  public run(): void {
    this.oak.energy = false;
    this.oak.height += 1;
  }
}

class PhotosynthesiseAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  public can(): boolean {
    return this.oak.hasSun() && this.oak.hasWater();
  }

  run(): void {
  }
}

class EmitOxygenAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  public can(): boolean {
    return this.oak.oxygen;
  }

  public run(): void {
    this.oak.oxygen = false;
    this.oak.landscape.oxygenate();
  }
}

class GatherSunAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  public can(): boolean {
    return this.oak.landscape.isShining();
  }

  public run(): void {
    this.oak.sun += 1;
  }
}

class GatherWaterAction implements GuardedAction {
  public constructor(private oak: Oak) {
  }

  can(): boolean {
    return this.oak.landscape.hasWater();
  }

  run(): void {
    this.oak.water += this.oak.landscape.giveWater();
  }
}
