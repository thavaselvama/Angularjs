var app= angular.module('myApp',['ui.bootstrap']).
factory('myhttpserv', function ($http) {
  return $http.get('https://api.myjson.com/bins/1edijl', { cache: true });
});