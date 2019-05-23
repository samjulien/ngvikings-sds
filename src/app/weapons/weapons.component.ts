import { Store } from '@ngrx/store';
import { createFireTorpedoesAction } from './weapons.actions';

export const weaponsComponent = {
  template: `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Weapons</h5>
      <p class="card-text">Photon torpedoes are a standard ship-based weapon armed with an antimatter warhead.</p>
      <button type="button" class="btn btn-danger" ng-click="$ctrl.fireWeapons()">Fire photon torpedoes</button>
    </div>
  </div>
  `,
  bindings: {},
  controller: weaponsController
};

weaponsController.$inject = ['Store'];
function weaponsController(store: Store<any>) {
  const vm = this;

  vm.fireWeapons = () => store.dispatch(createFireTorpedoesAction());
}
