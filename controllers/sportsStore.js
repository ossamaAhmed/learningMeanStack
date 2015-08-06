angular.module("sportsStore").constant("dataUrl","http://localhost:8000/products")
							 .controller("sportsStoreCtrl", function($scope, $http, dataUrl){
	$scope.data={};
	$http.get(dataUrl)
		 .success(function(data){
		 	$scope.data.products=data;
		 })
		 .error(function(error){
		 	$scope.data.error=error;
		 });
});