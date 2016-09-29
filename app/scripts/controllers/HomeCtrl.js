(function() {

  function HomeCtrl(Room) {
    console.log(Room);
    this.rooms = Room.all;
    // Room.add('Room 2');
    this.addRoom(room) {
      Room.add(room);
    }
  }

  angular
  .module('chatItUp')
  .controller('HomeCtrl', ['Room', HomeCtrl]);
}());
