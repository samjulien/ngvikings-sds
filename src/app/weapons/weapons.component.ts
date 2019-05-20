export const weaponsComponent = {
  template: `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Weapons</h5>
      <p class="card-text">Photon torpedoes are a standard ship-based weapon armed with an antimatter warhead.</p>
      <a href="#" class="btn btn-danger" ng-click="$ctrl.fireWeapons()">Fire photon torpedoes</a>
    </div>
  </div>
  `,
  bindings: {},
  controller: weaponsController
};

weaponsController.$inject = ['dashboardService'];
function weaponsController(dashboardService) {
  const vm = this;

  vm.fireWeapons = () => {
    dashboardService.fireTorpedoes();
  };
}
