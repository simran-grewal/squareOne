angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		})

		.when('/menu', {
			templateUrl: 'views/menu.html',
			controller: 'MenuController'
		})

		.when('/additem', {
			templateUrl: 'views/additem.html',
			controller: 'additemController'
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupController'
		})
	$locationProvider.html5Mode(true);

}]);
