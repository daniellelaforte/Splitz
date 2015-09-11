angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", function($scope){
	$scope.message = "Add another price";
	$scope.classname="forthehiddenform";
	
	$scope.Submit = function() {
			//event.preventDefault(); //don't need this - angular does this automatically
		   // $scope.firstname=$scope.price1;
		      $scope.total=$scope.price1 + $scope.price2 + $scope.price3
    }

    $scope.Show = function() {
		    	$scope.classname="forthevisibleform"	    

    }

}]
);

//I don't know how to bind a color and keep adding fields and then using their inputs 