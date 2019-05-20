export const dashboardComponent = {
  template: `
  <div class="row">
    <div class="col" style="text-align:center">
      <h1>{{$ctrl.title}}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <status></status>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <weapons></weapons>
    </div>
    <div class="col-md-4">
      <shields></shields>
    </div>
    <div class="col-md-4">
      <warp></warp>
    </div>
  </div>
  `,
  bindings: {},
  controller: dashboardController
};

function dashboardController() {
  const vm = this;
  vm.title = 'Starship Dashboard System';
}
