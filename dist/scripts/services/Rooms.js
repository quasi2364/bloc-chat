(function() {
	function Rooms ($firebaseArray) {
		var Rooms = {};
		var ref = new Firebase("https://dansblocchat.firebaseio.com/");
		Rooms.messages = $firebaseArray(ref.child('messages'));


		Rooms.all = $firebaseArray(ref.child('rooms'));

		Rooms.addRoom = function(room) {
			Rooms.all.$add(room);
		};

		// Rooms.getMessages = function() {
		// 	messages.$loaded().then(function(data) {
		// 		var x = data.orderByChild('roomId').equalTo('-KJwxt6VJ25O6dN1UFxH');
		// 		console.log(x);
		// 		return x;
		// 	});
		// };
			
		return Rooms;
	}

	angular
		.module('blocChat')
		.factory('Rooms', ['$firebaseArray', Rooms])
})();