// Vendors
import angular from 'angular';
import uirouter from 'angular-ui-router';
// Custom
import { Router } from './router';
import { MainCtrl } from './main/MainCtrl';
import { AboutCtrl } from './about/AboutCtrl';

angular.module('angularWebpack', [uirouter])
.config(Router)
.controller('MainCtrl', MainCtrl)
.controller('AboutCtrl', AboutCtrl);
