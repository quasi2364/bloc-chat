(function() {
	function UsernameCtrl ($scope, $uibModalInstance, $cookies) {
		console.log('UsernameCtrl')

		$scope.addUsername = function(username) {
			$cookies.put('blocChatCurrentUser', username)
			if (username === '' || !username) {
				alert('You must enter a valid username to continue.')
			} else {
				$uibModalInstance.close();
			}
		};
	}

	angular
		.module('blocChat')
		.controller('UsernameCtrl', ['$scope', '$uibModalInstance', '$cookies', UsernameCtrl])
})();