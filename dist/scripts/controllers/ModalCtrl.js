(function() {

  function ModalCtrl(Room, $uibModalInstance) {
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
  };

  angular
    .module('chatItUp')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
