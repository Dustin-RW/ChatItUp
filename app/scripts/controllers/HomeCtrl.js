var testing;
(function() {

  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;
    this.room = null;


    // this.getRoom = function(room) {
    //   this.room = room;
    // }

    this.getRoomById = function(roomId) {
      this.room = this.rooms.$getRecord(roomId);
    }

    this.addMessage = function(roomId, messageText) {
      // console.log(roomId);
      console.log(messageText);

      Room.addMessage(roomId, {
        content: messageText
      });
      this.newMessageText = '';
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
