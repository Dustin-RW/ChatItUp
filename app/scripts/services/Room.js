(function() {

  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    rooms.$add("Room 1");

    return {
      all: rooms
    };
  }

  angular
    .module('chatItUp')
    .factory('Room', ['$firebaseArray', Room]);
})();
