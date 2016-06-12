(function() {
	function Message($firebaseArray, $cookies) {
		var ref = new Firebase("https://dansblocchat.firebaseio.com/");
		var messages = $firebaseArray(ref.child('messages'));
		var username = $cookies.get('blocChatCurrentUser');

		return {
			send: function(newMessage) {
				messages.$add({
					content: newMessage,
					roomId: '-KJwxt6VJ25O6dN1UFxH',
					sentAt: Firebase.ServerValue.TIMESTAMP,
					username: username
				})
			}
		};
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();