'use strict';

var store = angular.module('store',['ngRoute'])
  .controller('StoreListCtrl', function($scope, $http, $route, $routeParams, $sce, $timeout) {

  $scope.header = "Recommended";

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
    // open Recommended page
    $scope.filterredApps = [];
    var j=0;
    for(var i=0; i<$scope.apps.length; i++){
      var app = $scope.apps[i];
      if(app.catalog.match($scope.header)){
        $scope.filterredApps[j++] = app;
      }
    }
  });

  // open detail page for one app
  $scope.openApp = function(app) {
    // firstly move overlay container into window
    $scope.app_path = $sce.trustAsResourceUrl(app.path);
    $scope.app = app;
    $("#list_container").fadeOut(500);
    $("#movein_container").show();
    // secondly show iframe container
    $timeout(function(){ $("#overlay_container").fadeIn(500); }, 550);
  }

  $scope.setup = function() {
    alert("done");
    console.log("done");
  }

  $scope.closeApp = function() {
    $scope.app = null;
    $scope.app_path = $sce.trustAsResourceUrl(null);
    $("#overlay_container").hide();
    $("#movein_container").hide();
    $("#list_container").fadeIn(500);
    $('#iframe_cover_before_loaded').show();
  }

  $scope.filterCAT = function(catalog) {
    $scope.header = catalog;
    $("#list_container").hide();
    // filter with catalog info
    $scope.filterredApps = [];
    var j=0;
    for(var i=0; i<$scope.apps.length; i++){
      var app = $scope.apps[i];
      if(app.catalog.match($scope.header)){
        $scope.filterredApps[j++] = app;
      }
    }
    $("#list_container").fadeIn(500);
    //$timeout(function(){ $(".app_unit").fadeIn(100); }, 800); 
  }

})