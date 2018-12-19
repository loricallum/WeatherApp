# WeatherApp#
#**Angular App for Techspert - In Progress**#

#**Tasks**#
-Create a new branch (name it after you) or create a publicly accessible repo.
-Create a new angular project with the features specified in this document
-Submit your branch/repo for review

#**Instructions**#
-Create a new angular project
-Use the open weather API to retrieve weather information on at least 10 cities
-Populate a table within the app with this data
-Introduce configurable pagination (rows of 5, 10, 20)
-Introduce sortable columns
-Introduce a filter for searching by city name

#Additional Tasks:
You may be asked to complete one or more of these additional tasks -#

Write or describe some unit tests
Create a graph that displays the median average global temperature and plot cities available in the API above/below the median
Try to use semantic and accessible HTML with SCSS or LESS
Open weather API
This project makes use of the open weather API for current weather conditions.

The API key to use for this project is: 194333f5b09188fbda8c4a3bbfea30b2 See https://openweathermap.org/current for documentation on the API

If you return weather data on multiple cities, each city should contain the following data:

[  
	{  
		"id":2210221,  
		"name":"Tarhuna",  
		"coord":{  
			"lon":13.6332,  
			"lat":32.43502  
		},  
		"main":{  
		"temp":17,  
		"pressure":1024,  
		"humidity":55,  
		"temp_min":17,  
		"temp_max":17  
	},  
		"dt":1485784982,  
		"wind":{  
		"speed":3.6,  
		"deg":10  
	},  
		"clouds":{  
			"all":40  
		},  
		"weather":[  
			{  
				"id":802,  
				"main":"Clouds",  
				"description":"scattered clouds",  
				"icon":"03d"  
			}  
		]  
	},  
] 
