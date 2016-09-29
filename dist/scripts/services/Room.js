(function() {

  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    // rooms.$add("Room 1");

    return {
      all: rooms,
      add: function(room) {
        rooms.$add(room);
      }
    };
  }

  angular
    .module('chatItUp')
    .factory('Room', ['$firebaseArray', Room]);
})();
