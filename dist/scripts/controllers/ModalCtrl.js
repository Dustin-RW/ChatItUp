(function() {

  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    var $ctrl = this;

    $ctrl.animationsEnabled = true;

    $ctrl.closeModal = function() {
      $uibModalInstance.close();
    }

    $ctrl.addRoom = function() {
      Room.add($ctrl.newRoomName);
      $ctrl.newRoomName = '';
      $ctrl.closeModal();
    }

    $ctrl.setNickname = function() {
      $cookies.put('blocChatCurrentUser', $ctrl.newNickname);
      $ctrl.newNickname = '';
      $ctrl.closeModal();
    }
  };

  angular
    .module('chatItUp')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
