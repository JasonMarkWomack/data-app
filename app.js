var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })


        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.ppl = ['Ryan Wills', 'Bill Black', 'Jill Hicks'];
            }
        })

        .state('home.history', {
            url: '/history',
            template: 'DevMountain is an industry-leading coding school that began in the heart of the Wasatch Mountains. Founded by fellow coders, DevMountains expert faculty are passionate about sharing their craft and empowering the  programmers, entrepreneurs and designers.'
        })

        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
              //  'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }

        });

});

routerApp.controller('scotchController', function($scope, serviceAtlanta, serviceBerlin, serviceTokyo, serviceCapeTown, serviceSaltLakeCity, servicegetInfoAmsterdamWeather){

    $scope.message = 'test';


    $scope.getInfoAtlanta = function() {
     serviceAtlanta.getInfoAtlanta().then(function(dataFromService) {
         console.log(dataFromService);


         $scope.housingAtlanta = dataFromService.categories[0];
         console.log($scope.housingAtlanta);

         $scope.costOfLivingAtlanta = dataFromService.categories[1];
         console.log($scope.cost0fLivingAtlanta);


         $scope.startupsAtlanta = dataFromService.categories[2];
         console.log($scope.startupsAtlanta);


       $scope.ventureCapitalAtlanta = dataFromService.categories[3];
       console.log($scope.ventureCapitalAtlanta);

       });
     };


   $scope.getInfoAtlanta();

       $scope.getInfoBerlin = function() {
       serviceBerlin.getInfoBerlin().then(function(dataFromService) {
           console.log(dataFromService);


           $scope.housingBerlin = dataFromService.categories[0];
           console.log($scope.housingBerlin);

           $scope.costOfLivingBerlin = dataFromService.categories[1];
           console.log($scope.cost0fLivingBerlin);


           $scope.startupsBerlin = dataFromService.categories[2];
           console.log($scope.startupsBerlin);


         $scope.ventureCapitalBerlin = dataFromService.categories[3];
         console.log($scope.ventureCapitalBerlin);

         });
       };


     $scope.getInfoBerlin();

     $scope.getInfoTokyo = function() {
     serviceTokyo.getInfoTokyo().then(function(dataFromService) {
         console.log(dataFromService);


         $scope.housingTokyo = dataFromService.categories[0];
         console.log($scope.housingTokyo);

         $scope.costOfLivingTokyo = dataFromService.categories[1];
         console.log($scope.cost0fLivingTokyo);


         $scope.startupsTokyo = dataFromService.categories[2];
         console.log($scope.startupsTokyo);


       $scope.ventureCapitalTokyo = dataFromService.categories[3];
       console.log($scope.ventureCapitalTokyo);

     });
   };


     $scope.getInfoTokyo();

     $scope.getInfoCapeTown = function() {
     serviceCapeTown.getInfoCapeTown().then(function(dataFromService) {
         console.log(dataFromService);


         $scope.housingCapeTown = dataFromService.categories[0];
         console.log($scope.housingCapeTown);

         $scope.costOfLivingCapeTown = dataFromService.categories[1];
         console.log($scope.cost0fLivingCapeTown);


         $scope.startupsTCapeTown = dataFromService.categories[2];
         console.log($scope.startupsTCapeTown);


       $scope.ventureCapitalCapeTown = dataFromService.categories[3];
         console.log($scope.ventureCapitalCapeTown);

       });
     };


     $scope.getInfoCapeTown();

/*     $scope.getInfoSaltLakeCity = function() {
     serviceSaltLakeCity.getInfoSaltLakeCity().then(function(dataFromService) {
         console.log(dataFromService);


         $scope.housingSaltLakeCity = dataFromService.categories[0];
         console.log($scope.housingSaltLakeCity);

         $scope.costOfLivingSaltLakeCity= dataFromService.categories[1];
         console.log($scope.cost0fLivingSaltLakeCity);


         $scope.startupsSaltLakeCity = dataFromService.categories[2];
         console.log($scope.startupsSaltLakeCity);


       $scope.ventureCapitalSaltLakeCity= dataFromService.categories[3];
         console.log($scope.ventureCapitalSaltLakeCity);

       });
     };


     $scope.getInfoSaltLakeCity();

*/

          $scope.getInfoAmsterdamWeather = function() {
        servicegetInfoAmsterdamWeather.getInfoAmsterdamWeather().then(function(dataFromService) {
              console.log(dataFromService);

                       $scope.weatherGetInfoAmsterdamWeather = dataFromService.result["0"].info.weather.temperature.fahrenheit;
                       console.log($scope.weatherGetInfoAmsterdamWeather);

            });
          };




          $scope.getInfoAmsterdamWeather();



   })
.controller('routerApp', ['$scope', function($scope) {


   }])
   .directive('myCustomer', function() {
     return {
       templateUrl: 'my-customer.html',
       controller: function($scope){
         $scope.customer = {
           name: 'Global Cities Inc.',
           address: 'Amsterdam, Netherlands'
         };

       }
     };
   });
   angular.module('routerApp').directive('showTime', function(){
  return {
    restrict: 'E',
    template: '<div> The current time is {{time}} </div>',
    link: function(scope, element, attrs){
      var currentTime = new Date();
      scope.time = currentTime.toString();
    }
  };
});
