import angular from 'angular';
import ngFileUpload from 'ng-file-upload';

import './index.jade';

// require all angular scripts
const context = require.context('./app/', true, /\.js$/);
const modulesNames = context.keys().map(module => context(module).default);

export default angular.module('mokosh', modulesNames.concat(ngFileUpload)).name;
