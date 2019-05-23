export enum Types {
  RaiseShields = '[Shields] Raise Shields',
  LowerShields = '[Shields] Lower Shields'
}

export interface RaiseShieldsAction {
  type: Types.RaiseShields;
}

export function createRaiseShieldsAction(): RaiseShieldsAction {
  return { type: Types.RaiseShields };
}

export interface LowerShieldsAction {
  type: Types.LowerShields;
}

export function createLowerShieldsAction(): LowerShieldsAction {
  return { type: Types.LowerShields };
}

export type Union = RaiseShieldsAction | LowerShieldsAction;
