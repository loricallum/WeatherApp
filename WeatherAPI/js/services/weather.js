app.factory('weather', ['$http', function($http) {
	return $http.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={194333f5b09188fbda8c4a3bbfea30b2}",
		{params: {'api-key': "194333f5b09188fbda8c4a3bbfea30b2"}})

		.success(function(data) {
					return data;
		})

		.error(function(err) {
					alert(err)
					return err;
		})
	
}])