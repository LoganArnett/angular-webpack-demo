// Templates
import MainTemplate from './main/main.html'
import AboutTemplate from './about/about.html'

/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");

   $stateProvider
       .state('main', {
           url: "/",
           controller : "MainCtrl as main",
           templateUrl: MainTemplate
       })
       .state('about', {
           url: "/about",
           controller : "AboutCtrl as about",
           templateUrl: AboutTemplate
       });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export { Router }
