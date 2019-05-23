import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromShip from './ship.reducer';

export interface AppState {
  ship: fromShip.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ship: fromShip.reducer
};

/**
 * Ship Selectors
 */
export const selectShipState = (state: AppState) => state.ship;
export const selectShipShieldsAreRaised = createSelector(
  selectShipState,
  fromShip.selectShieldsAreRaised
);
export const selectShipIsFiringTorpedoes = createSelector(
  selectShipState,
  fromShip.selectIsFiringTorpedoes
);
export const selectShipWarpSpeed = createSelector(
  selectShipState,
  fromShip.selectWarpSpeed
);
