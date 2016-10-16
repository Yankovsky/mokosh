import angular from 'angular';

import template from './template.jade';

export default angular
	.module('mokosh.formulas.directive', [])
	.component('mokoshFormulas', {
		template,
		controller: [function () {
			this.formulas = [1, 2, 3];
		}]
	})
	.name;
