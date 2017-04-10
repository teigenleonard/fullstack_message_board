var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', '$http', 'DataService',function( $scope, $http, DataService){
  console.log('InputController');

  $scope.info = {
    name : '',
    message : ''
  };

  $scope.postData = DataService.postData;

}]);

myApp.controller('DisplayController', ['$scope', '$http', 'DataService',function( $scope, $http, DataService){
 console.log('DisplayController');

 $scope.messages = DataService.getData;

}]);

myApp.factory('DataService', ['$http', function($http){
    var messageObject = {
      messages : []
    };

    function getData(){
      $http.get('/messages').then(function(response){
        console.log('getData response:' response);
      });
    }

    function postData(message){
      $http.post('/messages', message).then(function(response){
        // console.log(response);
      });
    }

    return {
      messageObject : messageObject,
      getData  : getData,
      postData : postData
    };
}]);
