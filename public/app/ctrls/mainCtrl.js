'use strict';
var app = angular.module('routeOutdoor')

app.controller('mainCtrl', function($scope, loginService, selectionService) {
	$scope.user = loginService.returnUser();

	$scope.$on('updateUser', function() {
		$scope.user = loginService.returnUser();
		// console.log($scope.user)
	});

	$scope.setSelection = function(selection) {
		selectionService.setSelection(selection);
	};
});


