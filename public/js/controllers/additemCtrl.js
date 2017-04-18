angular.module('additemCtrl', []).controller('additemController', function($scope, $http) {

	$scope.addItem = function(){
    $http({

      method: "POST",
      url: "/additem",
      data: {
        name: $scope.name,
        image: $scope.image,
        price: $scope.price
      }
    }).then(function(response) {
        var result = response.data;
      if(result == 'Yes'){
        $scope.test = "New Item is added Successfully";
        $scope.name = '';
        $scope.image = '';
        $scope.price = '';
      }else{
        $scope.test = "something is Wrong!!";
      }

    })
  }

});
