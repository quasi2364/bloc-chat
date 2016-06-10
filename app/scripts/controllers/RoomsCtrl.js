(function() {
	function RoomsCtrl (Rooms, $scope, $uibModal) {
		$scope.rooms = Rooms;
		$scope.open = function() {
			console.log('open');

			var modalInstance = $uibModal.open({
				animation: true,
				templateUrl: '/templates/addRoom.html',
				size: 'sm'
			});
			return modalInstance;
		};
		// $scope.rooms = Rooms.all;
		// console.log($scope.rooms);

	}

	angular
		.module('blocChat')
		.controller('RoomsCtrl', ['Rooms', '$scope', '$uibModal', RoomsCtrl]);
})(); 