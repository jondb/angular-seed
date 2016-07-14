'use strict';

angular.module('myApp.messageService', [ ])

.factory('messageService', ['$window', function(win) {
    var _msgs = [];
    return {
	    messages: _msgs,
	    add: function(severity, text) {
	    	_msgs.push({
	    		severity: severity, 
	    		text: text
	    	})
	    },
	    remove: function(index) {
			_msgs.splice(index, 1);
		}
	};
 }])
.controller("messagesCtrl", ["$scope", "messageService",
function($scope, messageService) {
    $scope.messages = messageService.messages,
    $scope.closeMsg = function(index) {
        messageService.remove(index);
    }
}]);