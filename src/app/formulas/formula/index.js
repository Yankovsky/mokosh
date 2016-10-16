import angular from 'angular';

import template from './template.jade';

export default angular
	.module('mokosh.formula.directive', [])
	.component('mokoshFormula', {
		template,
		controller: ['$routeParams', function ($routeParams) {
			this.a = $routeParams.name;
		}]
	})
	.name;
