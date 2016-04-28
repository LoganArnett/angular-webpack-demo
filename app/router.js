/* @ngInject */
function Router($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise("/");

   $stateProvider
       .state('main', {
           url: "/",
           controller : "MainCtrl as main",
           templateUrl: require('./main/main.html')
       })
       .state('about', {
           url: "/about",
           controller : "AboutCtrl as about",
           templateUrl: require('./about/about.html')
       });
}

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

export { Router }
