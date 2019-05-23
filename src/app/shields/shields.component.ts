import { Store } from '@ngrx/store';
import {
  createRaiseShieldsAction,
  createLowerShieldsAction
} from './shields.actions';

export const shieldsComponent = {
  template: `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Shields</h5>
    <p class="card-text">Deflector shields provide limited protection from damage.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" ng-click="$ctrl.raiseShields()" class="btn btn-primary">Raise</button>
      <button type="button" ng-click="$ctrl.lowerShields()" class="btn btn-primary">Lower</button>
    </div>
  </div>
</div>
  `,
  bindings: {},
  controller: shieldsController
};

shieldsController.$inject = ['Store'];
function shieldsController(store: Store<any>) {
  const vm = this;

  vm.raiseShields = () => store.dispatch(createRaiseShieldsAction());
  vm.lowerShields = () => store.dispatch(createLowerShieldsAction());
}
