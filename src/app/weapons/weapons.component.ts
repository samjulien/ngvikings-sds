export const weaponsComponent = {
  template: `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Weapons</h5>
      <p class="card-text">Photon torpedoes are a standard ship-based weapon armed with an antimatter warhead.</p>
      <a href="#" class="btn btn-danger">Fire photon torpedos</a>
    </div>
  </div>
  `,
  bindings: {},
  controller: weaponsController
};

function weaponsController() {
  const vm = this;
}
