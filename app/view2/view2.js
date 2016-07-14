'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['messageService', function(messageService) {

	messageService.add("danger", "In veiw 2 ctrl!");
	messageService.add("success", "Nah, just kidding. You're ok.");

}]);