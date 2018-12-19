app.controller('MainController', ['$scope', 'weather', function($scope, weather) {
		$scope.list = [];

		weather.success(function(data) {
			for (i = 0; i < data.results.length; i++) {
						var numbers = {
							title: data.results[i].city,
							temp: data.results[i].temp


						}
						$scope.list.push(numbers)
			}
		})
  
}]); 
