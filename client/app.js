(function() {
	'use strict'

	angular
		.module("app", ["ngRoute"])
		.controller("MainController", MainController)
		.config(config);

		MainController.$inject = [];
		function MainController() {
			var vm = this;
		};

		//include routeProvider & locationProvider to detect your URL changes
		config.$inject = ["$routeProvider", "$locationProvider"];
		function config($routeProvider, $locationProvider) {
			$routeProvider
				.when("/login", {
					templateUrl		: "./client/components/login.html",
					controller 		: "LoginController",
					controllerAs	: "vm"
				})

				.when("/home", {
					templateUrl		: "./client/components/home.html",
					controller		: "HomeController",
					controllerAs	: "vm"	
				})

				.when("/users", {
					templateUrl		: "./client/components/user.html",
					controller		: "UserController",
					controllerAs	: "vm"		
				})

				.when("/developers", {
					templateUrl		: "./client/components/developer.html",
					controller		: "DevController",
					controllerAs	: "vm"		
				})

				.otherwise ("/login");

			$locationProvider.html5Mode(true);
		}
})();