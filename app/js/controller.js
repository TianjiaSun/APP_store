'use strict';

var store = angular.module('store',['ngRoute'])
  .controller('StoreListCtrl', function($scope, $http, $route, $routeParams, $sce, $timeout) {

  $scope.myClass = [];

  $scope.data;
  var req = {
    method: 'POST',
    url: 'http://asa.gausian.com',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: $.param({user_app_id:'app_id', service_app_name:'UserAppInfo', request_string: "get"})
  };

  // get app info from ASA
  $http(req).success(function(data) {
    $scope.apps = angular.fromJson(data.response);
    console.log($scope.apps);
  });

  // open detail page for one app
  $scope.openApp = function(app) {
    // add animation class
    //$scope.myClass.push('flash');
    //$scope.myClass.push('animated');
    // remove animation class
    //$scope.myClass.pop('flash');
    //$scope.myClass.pop('animated');

    // firstly move overlay container into window
    $scope.app_path = $sce.trustAsResourceUrl(app.path);
    $scope.app = app;
    $("#list_container").fadeOut(500);
    $("#movein_container").show();
    // secondly show iframe container
    $timeout(function(){ $("#overlay_container").fadeIn(500); }, 550);
  }

  $scope.closeApp = function() {
    $scope.app = null;
    $scope.app_path = $sce.trustAsResourceUrl(null);
    $("#overlay_container").hide();
    $("#movein_container").hide();
    $("#list_container").fadeIn(500);
  }

})