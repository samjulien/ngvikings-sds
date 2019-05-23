import * as angular from 'angular';
import 'angular-route';
import { downgradeInjectable } from '@angular/upgrade/static';
import { Store } from '@ngrx/store';
import { dashboardComponent } from './dashboard/dashboard.component';
import { statusComponent } from './status/status.component';
import { shieldsComponent } from './shields/shields.component';
import { weaponsComponent } from './weapons/weapons.component';
import { warpComponent } from './warp/warp.component';
import { WeaponsService } from './weapons/weapons.service';

const MODULE_NAME = 'sds-legacy';

hashPrefixConfig.$inject = ['$locationProvider'];
function hashPrefixConfig($locationProvider) {
  $locationProvider.hashPrefix('');
}

routeProviderConfig.$inject = ['$routeProvider'];
function routeProviderConfig($routeProvider) {
  $routeProvider.when('/', {
    template: '<dashboard></dashboard>'
  });
}

angular
  .module(MODULE_NAME, ['ngRoute'])
  .config(hashPrefixConfig)
  .config(routeProviderConfig)
  .component('dashboard', dashboardComponent)
  .component('status', statusComponent)
  .component('shields', shieldsComponent)
  .component('weapons', weaponsComponent)
  .component('warp', warpComponent)
  .service('weaponsService', WeaponsService)
  .factory('Store', downgradeInjectable(Store));

export default MODULE_NAME;
