export class DashboardService {
  static $inject: string[];
  FIRE_TORPEDOES = 'fire-torpedoes';
  constructor(private $rootScope) {}

  fireTorpedoes() {
    this.$rootScope.$broadcast(this.FIRE_TORPEDOES, 'Firing torpedoes.');
  }

  onFireTorpedoes($scope, handler) {
    $scope.$on(this.FIRE_TORPEDOES, (event, message) => {
      handler(message);
    });
  }
}

DashboardService.$inject = ['$rootScope'];
