angular.module('feedApp').controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$scope', 'homeService'];

function homeCtrl($scope, homeService) {
	
	$scope.getFeeds = function() {
		// differentiate displayedFeeds from feeds to manage the display limit
		$scope.feeds = homeService.data;
		$scope.displayedFeeds = $scope.feeds.slice(0, 10);
	};

	$scope.loadMoreFeeds = function() {
		if($scope.displayedFeeds.length < 25) {
			$scope.displayedFeeds = $scope.feeds.slice(0, 25);
		} else {
			$scope.displayedFeeds = $scope.feeds.slice(0, 50);
		}
	};

	$scope.filterByDesc = function() {
		$scope.feeds = homeService.data.filter(function(item) {
			if(item.description) {
				return item.description.indexOf($scope.description)>-1;
			} else {
				if($scope.description.length>0) { // if video has no description and filter is white
					return false;
				} else {
					return true;
				}
			}
		});
		$scope.displayedFeeds = $scope.feeds.slice(0, 10);
	};

	$scope.filterByLikes = function() {
		$scope.feeds = homeService.data.filter(function(item) {
			if($scope.moreTen) {
				return item.user.metadata.connections.likes.total >= 10;
			}
			return true;
		});
		$scope.displayedFeeds = $scope.feeds.slice(0, 10);
	};
}