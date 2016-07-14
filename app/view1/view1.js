'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['messageService', '$timeout', function(messageService, $timeout) {

	messageService.add("info", "In veiw1 ctrl");
	$timeout (function() {
		messageService.add("warning", "Don't go to view 2!");
	}, 1500);


}]);