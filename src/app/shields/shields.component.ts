export const shieldsComponent = {
  template: `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Shields</h5>
    <p class="card-text">Deflector shields provide limited protection from damage.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" ng-click="$ctrl.shields('up')" class="btn btn-primary">Raise</button>
      <button type="button" ng-click="$ctrl.shields('down')" class="btn btn-primary">Lower</button>
    </div>
  </div>
</div>
  `,
  bindings: {},
  controller: shieldsController
};

shieldsController.$inject = ['dashboardService'];
function shieldsController(dashboardService) {
  const vm = this;

  vm.shields = status => {
    dashboardService.shields(status);
  };
}
