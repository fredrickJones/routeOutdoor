'use strict';

angular.module('routedApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
        	center: function(locationService, $q){
        		var deferred = $q.defer()
        		Coordinates.getLocation().then(function(coords){
        			coords.latitude = coords.lat;
        			coords.longitude = coords.lon;
        			deferred.resolve(coords);
        		})
        		return deferred.promise;
        	},
        	crags: function(Rock) {  //<--this will load points on load
        		return Rock.getNear();
        	},
        	sites: function(Camp) {  //<--this will load points on load
        		return Camp.getNear();
        	},
        	trails: function(Hike) {  //<--this will load points on load
        		return Hike.getNear();
        	}
        }
      });
  });
