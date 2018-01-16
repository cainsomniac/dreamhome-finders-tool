(function() {
	'use strict'

	angular
		.module("app", ["ngRoute"])
		.controller("MainController", MainController)
		.config(config);

		MainController.$inject = [];
		function MainController() {
			var vm = this;

			vm.content = "hello world";

		};

		//include routeProvider & locationProvider to detect your URL changes
		config.$inject = ["$routeProvider", "$locationProvider"];
		function config($routeProvider, $locationProvider) {
			$routeProvider
				.when("/login", {
					//css				: "app/home/home.css",
					templateUrl		: "./client/components/login.html",
					controller		: "LoginController",
					controllerAs	: "vm"
				})

				.when("/home", {
					templateUrl		: "./client/components/home.html",
					controller		: "HomeController",
					controllerAs	: "vm"	
				})

				.otherwise ("/login");

			$locationProvider.html5Mode(true);
		}
})();