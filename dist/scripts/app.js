(function() {

  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({ //hashBang URLs are disabled
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('index', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: '/templates/home.html'
      });
  }


  angular
    .module('chatItUp', ['firebase', 'ui.router'])
    .config(config);
})();
