(function() {

  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var messagesRef = ref.child("messages");

    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(messagesRef);

    messages[0] = {
      message: {
        
      }
    }



    var getMessages = function() {

    };

    return {
      all: rooms,
      allMessages: messages,
      add: function(room) {
        rooms.$add(room);
      },
    };
  }

  angular
    .module('chatItUp')
    .factory('Room', ['$firebaseArray', Room]);
})();
