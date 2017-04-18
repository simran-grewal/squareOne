angular.module('MenuCtrl', []).controller('MenuController', function($scope, $http) {

$scope.getItem = function(){
	$http({
		method: "POST",
		url: "/getitem",
		data: {
		}
	}).then( function(response) {

			$scope.products = response.data;
			if($scope.products.length == 0){
				$scope.noProduct = "Sorry No Product is Available";
			}
	})

		
}



});
