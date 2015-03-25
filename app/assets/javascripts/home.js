var app = angular.module('todoList', [])
  app.controller('TaskCtrl', ['$scope', function ($scope) {
    $scope.tasks =[
          {"text":"Знайти квитки до Києва", "date": "26 бер. 2015", "done": false},
          {"text":"Cпакувати речі", "date":"27 бер. 2015", "done": true},
          {"text":"Поїхати на двірець", "date":"27 бер. 2015 22.15", "done": false}]
  }]);
  app.controller('ProjectCtrl', ['$scope', function ($scope) {
  	$scope.text = 'First progect';
  }]);