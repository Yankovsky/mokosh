import angular from 'angular';

export default angular
	.module('mokosh.routes', [])
	.config(['$locationProvider', $locationProvider => $locationProvider.html5Mode(true)])
	.name;
