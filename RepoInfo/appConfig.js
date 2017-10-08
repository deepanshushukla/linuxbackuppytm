/**
 * Created by deepanshushukla on 2/9/17.
 */
var app = angular.module("userinfoapp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when("/dsdsd", {
            templateUrl : "./main.html"
        }).otherwise({
            templateUrl : "./main.html"});


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});