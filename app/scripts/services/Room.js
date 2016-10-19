(function() {

 function Room($firebaseArray) {
   var ref = firebase.database().ref().child("rooms");
   var rooms = $firebaseArray(ref);
   var roomMessages;


   var addMessageToRoom = function(roomId, message) {
     var messagesRef = firebase.database().ref().child("rooms/" + roomId + '/messages');
     var messages = $firebaseArray(messagesRef);

     messages.$add(message);

     messages.$loaded().then(function(messages) {
       var messagesLength = messages.length;

       if (messagesLength > 19) {
         messages.$remove(messages[0])
       }

       console.log(messagesLength);
     });

   };

   var messagesForRoom = function(roomId) {
     var ref = firebase.database().ref().child("rooms/" + roomId + '/messages');
     return $firebaseArray(ref);
   };

   return {
     all: rooms,
     add: function(room) {
       rooms.$add({roomName: room});
     },
     addMessage: function(roomId, message) {
       addMessageToRoom(roomId, message);
     }
   };
 }

 angular
   .module('chatItUp')
   .factory('Room', ['$firebaseArray', Room]);
})();
