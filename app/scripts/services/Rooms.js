(function() {
	function Rooms ($firebaseArray) {
		var Rooms = {};
		var ref = new Firebase("https://dansblocchat.firebaseio.com/");
		
		Rooms.all = $firebaseArray(ref.child('rooms'));

		Rooms.addRoom = function(room) {
			Rooms.all.$add(room);
		};

		return Rooms;
	}

	angular
		.module('blocChat')
		.factory('Rooms', ['$firebaseArray', Rooms])
})();