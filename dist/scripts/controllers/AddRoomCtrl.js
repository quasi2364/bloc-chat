(function() {
	function AddRoomCtrl (Rooms, $scope, $uibModalInstance) {
		
		$scope.add = function(newRoom) {
			Rooms.all.$add(newRoom);
			$uibModalInstance.close();
		};

		$scope.close = function() {
			$uibModalInstance.close();	
		};
	}

	angular
		.module('blocChat')
		.controller('AddRoomCtrl', ['Rooms', '$scope', '$uibModalInstance', AddRoomCtrl]);
})(); 