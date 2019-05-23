import { Injectable } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap } from 'rxjs/operators';
import * as WeaponsActions from './weapons.actions';

@Injectable()
export class WeaponsEffects {
  constructor(
    private actions$: Actions<WeaponsActions.Union>,
    private upgrade: UpgradeModule
  ) {}

  @Effect()
  fireTorpedoes$ = this.actions$.pipe(
    ofType(WeaponsActions.Types.FireTorpedoes),
    concatMap(async () => {
      await this.upgrade.$injector.get('weaponsService').fireTorpedoes();

      return WeaponsActions.createFireTorpedoesSuccessAction();
    })
  );
}
