(function() {
	function AddRoomCtrl (Rooms, $scope, $uibModal) {
		// $scope.open = function() {
		// 	console.log('open');

		// 	var modalInstance = $uibModal.open({
		// 		animation: $scope.animationsEnabled,
		// 		templateUrl: 'addRoom.html'
		// 	});
		// };
	}

	angular
		.module('blocChat')
		.controller('AddRoomCtrl', ['Rooms', '$scope', '$uibModal', AddRoomCtrl]);
})(); 