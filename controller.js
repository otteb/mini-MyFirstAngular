angular.module('friendsList')
.controller('mainCtrl', function($scope){

$scope.friends = ['Nick', 'Jorgen', 'Auddy', 'Hannah'];

$scope.addFriend = function(newFriend){
  $scope.friends.push(newFriend);
};

});
