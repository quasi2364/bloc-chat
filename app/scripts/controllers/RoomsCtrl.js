(function() {
	function RoomsCtrl (Rooms, $scope, $uibModal, Message) {
		$scope.rooms = Rooms;	
		$scope.message = Message;

		$scope.open = function() {
			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: '/templates/addRoom.html',
				size: 'sm',
				controller: 'AddRoomCtrl'
			});
		};
	}

	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Rooms', '$scope', '$uibModal', 'Message', RoomsCtrl]);
})(); 