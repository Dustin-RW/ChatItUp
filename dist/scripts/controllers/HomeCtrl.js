(function() {

  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;
    this.room = 'Click on a Room for';

    this.getRoom = function(room) {
      this.room = room;
    }

    this.open = function(size) {
      var modalInstance = $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/myModalContent.html',
        controller: 'ModalCtrl',
        controllerAs: 'ctrl'
      });
    }
  }



  angular
  .module('chatItUp')
  .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
}());
