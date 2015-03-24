'use strict';


var store = angular.module('store',['ngRoute'])
.controller('StoreListCtrl', function($scope, $http, $route, $routeParams) {

  $scope.data;
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'UserAppInfo', request_string: "get"})
  };

  $http(req).success(function(data) {
    $scope.apps = angular.fromJson(data.response);
    console.log($scope.apps);
  });

})