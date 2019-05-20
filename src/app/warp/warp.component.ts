export const warpComponent = {
  template: `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Warp</h5>
    <p class="card-text">This ship is equipped with a warp drive for traveling beyond light speed.</p>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">3</button>
      <button type="button" class="btn btn-primary">5</button>
      <button type="button" class="btn btn-primary">7</button>
      <button type="button" class="btn btn-warning">9</button>
      <button type="button" class="btn btn-danger">9.95</button>
    </div>
  </div>
</div>
  `,
  bindings: {},
  controller: warpController
};

function warpController() {
  const vm = this;
}
