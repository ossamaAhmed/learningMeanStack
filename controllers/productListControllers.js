angular.module("sportsStore").constant("productListActive","btn-primary")
.constant("productListPageCount",3).controller("productListCtrl",function($scope,$filter,productListActive,productListPageCount,cart){
	var selectedCategory= null;
	$scope.selectedPage=1;
	$scope.pageSize=productListPageCount;
	$scope.selectCategory= function(newCategory){
		selectedCategory= newCategory;
		$scope.selectedPage=1;
	}
	$scope.categoryFilterFn= function(product){
		return selectedCategory==null || product.category == selectedCategory;
	}
	$scope.getCategoryClass= function(category){
		return selectedCategory==category? productListActive : "";
	}
	$scope.selectPage= function(newPage){
		$scope.selectedPage= newPage;
	}
	$scope.getPageClass= function(page){
		return $scope.selectedPage==page? productListActive : "";
	}
	$scope.addProductToCart= function(product){
		cart.addProduct(product.id,product.name,product.price);
	}
});