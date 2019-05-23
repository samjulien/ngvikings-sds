import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/shared/state';

export const statusComponent = {
  template: `
  <div class="card text-center">
    <img src="assets/enterprise.jpg" class="card-img-top" alt="Enterprise diagram">
    <div class="card-body" style="display:block"  ng-class="{'shake-hard shake-constant': $ctrl.warpFactor === 9.95}">
      <h2 class="card-title">System Status</h2>
      <p class="card-text">{{$ctrl.status}}</p>
      <p class="card-text"><strong>Weapons:</strong> {{$ctrl.weaponsStatus}}</p>
      <p class="card-text"><strong>Shields:</strong> {{$ctrl.shieldsStatus}}</p>
      <p class="card-text"
        ng-class="{'btn-warning': $ctrl.warpFactor === 9, 'btn-danger': $ctrl.warpFactor === 9.95}">
          <strong>Warp Factor:</strong> {{$ctrl.warpFactor}}
      </p>
    </div>
  </div>
  `,
  bindings: {},
  controller: statusController
};

statusController.$inject = ['$scope', 'Store'];
function statusController($scope, store: Store<fromRoot.AppState>) {
  const vm = this;
  vm.status = 'All systems functional.';
  vm.weaponsStatus = 'Weapons online.';
  vm.shieldsStatus = 'Shields online.';
  vm.warpFactor = 3;

  const torpedoesSubscription = store
    .select(fromRoot.selectShipIsFiringTorpedoes)
    .subscribe(isFiringTorpedoes => {
      vm.weaponsStatus = isFiringTorpedoes
        ? 'Firing torpedoes!'
        : 'Weapons online.';
    });

  const shieldsSubscription = store
    .select(fromRoot.selectShipShieldsAreRaised)
    .subscribe(areShieldsRaised => {
      vm.shieldsStatus = areShieldsRaised ? 'Shields up!' : 'Shields online.';
    });

  const warpSpeedSubscription = store
    .select(fromRoot.selectShipWarpSpeed)
    .subscribe(warpSpeed => {
      vm.warpFactor = warpSpeed;
    });

  vm.$onDestroy = () => {
    torpedoesSubscription.unsubscribe();
    shieldsSubscription.unsubscribe();
    warpSpeedSubscription.unsubscribe();
  };
}
