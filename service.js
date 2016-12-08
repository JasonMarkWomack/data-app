angular.module("routerApp").service("serviceAtlanta", function($http){
  this.getInfoAtlanta = function() {

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:atlanta/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})


	}
});
  angular.module("routerApp").service("serviceBerlin", function($http){
    this.getInfoBerlin = function(){

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:berlin/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})
}
});

  angular.module("routerApp").service("serviceTokyo", function($http){
    this.getInfoTokyo = function(){

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:tokyo/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})
}
});

angular.module("routerApp").service("serviceCapeTown", function($http){
  this.getInfoCapeTown = function(){

return  $http({
      method: 'GET',
      url: 'https://api.teleport.org/api/urban_areas/slug:cape-town/scores/'
  }).then(function(response) {var parsedResponse = response.data.Economy;
    return response.data;
  })
}
});

angular.module("routerApp").service("serviceSaltLakeCity", function($http){
  this.getInfoSaltLakeCity = function(){

return  $http({
      method: 'GET',
      url: 'https://api.teleport.org/api/urban_areas/slug:salt-lake-city/scores/'
  }).then(function(response) {var parsedResponse = response.data.Economy;
    return response.data;
  })
}});

angular.module("routerApp").service("serviceSaltLakeCity", function($http){
  this.getInfoSaltLakeCity = function(){

return  $http({
      method: 'GET',
      url: 'http://api.apixu.com/v1/current.json?key=25c2b254e9514e61aac182821160712&q=30301'
  }).then(function(response) {var parsedResponse = response.data.Economy;
    return response.data;
  })
}});
angular.module("routerApp").service("servicegetInfoAmsterdamWeather", function($http){
  this.getInfoAmsterdamWeather = function(){

return  $http({
      method: 'GET',
      url: 'https://nomadlist.com/amsterdam-netherlands.json'
  }).then(function(response) {var parsedResponse = response.data.Economy;
    return response.data;
  })
}});
