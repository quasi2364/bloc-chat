(function() {
	function RoomsCtrl (Rooms, $scope, $uibModal) {
		$scope.rooms = Rooms;	

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
		.controller('RoomsCtrl', ['Rooms', '$scope', '$uibModal', RoomsCtrl]);
})(); 