export enum Types {
  FireTorpedoes = '[Weapons] Fire Torpedoes',
  FireTorpedoesSuccess = '[Weapons API] Fire Torpedoes Success'
}

export interface FireTorpedoesAction {
  type: Types.FireTorpedoes;
}

export function createFireTorpedoesAction(): FireTorpedoesAction {
  return { type: Types.FireTorpedoes };
}

export interface FireTorpedoesSuccessAction {
  type: Types.FireTorpedoesSuccess;
}

export function createFireTorpedoesSuccessAction(): FireTorpedoesSuccessAction {
  return { type: Types.FireTorpedoesSuccess };
}

export type Union = FireTorpedoesAction | FireTorpedoesSuccessAction;
