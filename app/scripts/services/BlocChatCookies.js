(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
        var modalInstance = $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/userNameModal.html',
          controller: 'ModalCtrl',
          controllerAs: 'ctrl'
        });
      }
  }

  angular
    .module('chatItUp')
    .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
