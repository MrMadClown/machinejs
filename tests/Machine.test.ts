import {Machine} from '../src/Machine';
import {Strategy} from "../src/Strategy";
import {State} from "../src/Node/State";
import {Guard, GuardedAction} from "../src/Actor";
import {ActionState} from "../src/Node/ActionState";

describe('read', function () {
  it('works', function () {

    enum BreathingStates {
      idle = 'idle',
      breathe = 'breathe',
    }

    const breathingTree = {
      identifier: BreathingStates.idle, strategy: Strategy.sequential,
      children: [
        {identifier: BreathingStates.breathe},
      ]
    };

    interface Breather {
      [BreathingStates.idle]: Guard;
      [BreathingStates.breathe]: GuardedAction;
    }

    const action: GuardedAction = {
      can: jest.fn(() => true),
      run: jest.fn(),
    };
    const guard: Guard = {
      can: jest.fn(() => true),
    };
    const actor = {
      [BreathingStates.idle]: guard,
      [BreathingStates.breathe]: action
    } as Breather;
    const machine = new Machine();

    const idle = machine.generateTree<Breather>(breathingTree, actor)

    expect(idle).toBeInstanceOf(State);
    expect(idle.identifier).toBe('idle');

    // @ts-ignore
    expect(guard.can.mock.calls.length).toBe(1);

    const breathing = idle.tick();

    expect(breathing).toBeInstanceOf(ActionState);
    expect(breathing.identifier).toBe('breathe');

    const idleAgain = breathing.tick();

    expect(idleAgain).toBeInstanceOf(State);
    expect(idleAgain.identifier).toBe('idle');

    // @ts-ignore
    expect(action.can.mock.calls.length).toBe(1);
    // @ts-ignore
    expect(action.run.mock.calls.length).toBe(1);
  });
});
