export const statusComponent = {
  template: `
  <div class="card text-center">
  <img src="assets/enterprise.jpg" class="card-img-top" alt="Enterprise diagram">
  <div class="card-body">
    <h2 class="card-title">System Status</h2>
    <p class="card-text">All systems functional.</p>
  </div>
</div>
  `,
  bindings: {},
  controller: statusController
};

function statusController() {
  const vm = this;
}
