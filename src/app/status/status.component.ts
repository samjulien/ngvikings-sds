export const statusComponent = {
  template: `
  <div class="card text-center">
    <img src="assets/enterprise.jpg" class="card-img-top" alt="Enterprise diagram">
    <div class="card-body">
      <h2 class="card-title">System Status</h2>
      <p class="card-text">{{status}}</p>
    </div>
  </div>
  `,
  bindings: {},
  controller: statusController
};

statusController.$inject = ['$scope', 'dashboardService'];
function statusController($scope, dashboardService) {
  const vm = this;
  $scope.status = 'All systems functional.';
  dashboardService.onFireTorpedoes($scope, msg => {
    $scope.status = msg;
    console.log($scope.status);
  });
}
