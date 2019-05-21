export const warpComponent = {
  template: `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">Warp</h5>
    <p class="card-text">This ship is equipped with a warp drive for traveling beyond light speed.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" ng-click="$ctrl.warpFactor(3)" class="btn btn-primary">3</button>
      <button type="button" ng-click="$ctrl.warpFactor(5)" class="btn btn-primary">5</button>
      <button type="button" ng-click="$ctrl.warpFactor(7)" class="btn btn-primary">7</button>
      <button type="button" ng-click="$ctrl.warpFactor(9)" class="btn btn-warning">9</button>
      <button type="button" ng-click="$ctrl.warpFactor(9.95)" class="btn btn-danger shake">9.95</button>
    </div>
  </div>
</div>
  `,
  bindings: {},
  controller: warpController
};

warpController.$inject = ['dashboardService'];
function warpController(dashboardService) {
  const vm = this;

  vm.warpFactor = factor => {
    dashboardService.warp(factor);
  };
}
