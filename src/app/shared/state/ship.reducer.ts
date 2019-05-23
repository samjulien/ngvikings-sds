import * as ShieldsActions from 'src/app/shields/shields.actions';
import * as WarpActions from 'src/app/warp/warp.actions';
import * as WeaponsActions from 'src/app/weapons/weapons.actions';

export interface State {
  shieldsRaised: boolean;
  warpSpeed: number;
  firingTorpedoes: boolean;
}

export const initialState: State = {
  shieldsRaised: false,
  warpSpeed: 3,
  firingTorpedoes: false
};

export function reducer(
  state = initialState,
  action: ShieldsActions.Union | WarpActions.Union | WeaponsActions.Union
): State {
  switch (action.type) {
    case ShieldsActions.Types.RaiseShields: {
      return { ...state, shieldsRaised: true };
    }

    case ShieldsActions.Types.LowerShields: {
      return { ...state, shieldsRaised: false };
    }

    case WarpActions.Types.SelectWarpSpeed: {
      return { ...state, warpSpeed: action.warpSpeed };
    }

    case WeaponsActions.Types.FireTorpedoes: {
      return { ...state, firingTorpedoes: true };
    }

    case WeaponsActions.Types.FireTorpedoesSuccess: {
      return { ...state, firingTorpedoes: false };
    }

    default: {
      return state;
    }
  }
}

export const selectShieldsAreRaised = (state: State) => state.shieldsRaised;
export const selectIsFiringTorpedoes = (state: State) => state.firingTorpedoes;
export const selectWarpSpeed = (state: State) => state.warpSpeed;
