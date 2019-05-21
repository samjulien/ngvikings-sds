export class DashboardService {
  static $inject: string[];
  FIRE_TORPEDOES = 'fire-torpedoes';
  ON_SHIELDS = 'on-shields';
  WARP_FACTOR = 'warp-factor';

  constructor(private $rootScope) {}

  fireTorpedoes() {
    this.$rootScope.$broadcast(this.FIRE_TORPEDOES, 'Firing torpedoes!');
  }

  onFireTorpedoes($scope, handler) {
    $scope.$on(this.FIRE_TORPEDOES, (event, message) => {
      handler(message);
    });
  }

  shields(status) {
    this.$rootScope.$broadcast(this.ON_SHIELDS, `Shields ${status}.`);
  }

  onShields($scope, handler) {
    $scope.$on(this.ON_SHIELDS, (event, message) => {
      handler(message);
    });
  }

  warp(factor) {
    this.$rootScope.$broadcast(this.WARP_FACTOR, factor);
  }

  onWarp($scope, handler) {
    $scope.$on(this.WARP_FACTOR, (event, factor) => {
      handler(factor);
    });
  }
}

DashboardService.$inject = ['$rootScope'];
