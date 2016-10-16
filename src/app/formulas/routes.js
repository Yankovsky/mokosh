import angular from 'angular';
import ngRoute from 'angular-route';

export default angular
	.module('mokosh.formula.routes', [ngRoute])
	.config(['$routeProvider', $routeProvider => {
		$routeProvider
			.when('/formulas', { template: '<mokosh-formulas></mokosh-formulas>' })
			.when('/formula/:name', { template: '<mokosh-formula></mokosh-formula>' });
	}])
	.name;
