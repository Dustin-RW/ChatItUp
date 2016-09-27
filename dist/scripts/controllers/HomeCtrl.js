(function() {

  function HomeCtrl($scope, Room) {
    $scope.rooms = Room.all;
  }

  angular
  .module('chatItUp')
  .controller('HomeCtrl', ['Room', HomeCtrl]);
}());
