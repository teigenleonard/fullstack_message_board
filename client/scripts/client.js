var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'DataService', function($scope, DataService) {
    // console.log('InputController');

    $scope.postData = DataService.postData;

}]);

myApp.controller('DisplayController', ['$scope', '$http', 'DataService', function($scope, $http, DataService) {
    // console.log('DisplayController');
    $scope.messageObject = DataService.messageObject;
    // $scope.message = function() {
    //   DataService.getData();
    // };
    console.log("DisplayController: ", DataService.messageObject.messages);
}]);

myApp.factory('DataService', ['$http', function($http){
    var messageObject = {
      messages : [],

    };

    function getData(){
      $http.get('/messages').then(function(response){
        // messageObject.beans = 'stringBeans';
        console.log('getData response:', response.data);
        // console.log(response.data);
        messageObject.messages = response.data;
        console.log(messageObject.messages);
      });

    }

    function postData(message){
      $http.post('/messages', message).then(function(response){
        // console.log(response);
          getData();
      });

    }

    return {
      messageObject : messageObject,
      getData  : getData,
      postData : postData
    };
}]);
