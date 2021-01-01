export type Actor<Interface> = {
  [key in keyof Interface]: Action | Guard
}

export interface Action {
  run(): void;
}

export interface Guard {
  can(): boolean;
}

export interface GuardedAction extends Action, Guard {
}

export function isGuard(action: any): action is Guard {
  return action && typeof action.can === 'function';
}
