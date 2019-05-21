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

statusController.$inject = ['$scope', 'dashboardService'];
function statusController($scope, dashboardService) {
  const vm = this;
  vm.status = 'All systems functional.';
  vm.weaponsStatus = 'Weapons online.';
  vm.shieldsStatus = 'Shields online.';
  vm.warpFactor = 3;

  dashboardService.onFireTorpedoes($scope, msg => {
    vm.weaponsStatus = msg;
  });

  dashboardService.onShields($scope, msg => {
    vm.shieldsStatus = msg;
  });

  dashboardService.onWarp($scope, (factor: number) => {
    vm.warpFactor = factor;
  });
}
