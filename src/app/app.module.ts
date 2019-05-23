import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import MODULE_NAME from './app.module.ajs';
import * as fromRoot from './shared/state';
import { WeaponsEffects } from './weapons/weapons.effects';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    UpgradeModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([WeaponsEffects])
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, [MODULE_NAME], {
      strictDi: true
    });
  }
}
