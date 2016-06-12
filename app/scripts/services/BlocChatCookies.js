(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		console.log("Current username is " + currentUser);
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				animation: true,
				templateUrl: '/templates/username.html',
				size: 'sm',
				controller: 'UsernameCtrl',
				backdrop: 'static'
			})
		}
	}

	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();