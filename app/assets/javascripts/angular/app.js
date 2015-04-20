var PROJECTS = [{'name': "Проект 1","id":1},{'name': "Проект 2","id":2},
    {'name': "Проект 3","id":3},{'name': "Проект 4","id":4},{'name': "Проект 5","id":5}];

var app = angular.module('todoList', ['ngRoute'])

  app.controller('ProjectsCtrl', ['$scope', function ($scope) {
    $scope.projects = PROJECTS;

    $scope.editingProject=true;
    console.log('$scope.projects');
    console.log($scope.projects);
  }]);

  app.controller('ProjectCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.projectId = $routeParams.projectId;

    $scope.project = PROJECTS[$scope.projectId-1];

    $scope.editProject=function(){
      console.log('Editing project');
      $scope.editingProject=true;
    }
  }]);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/projects', {
          templateUrl: '/assets/angular/views/projects/projects.html',
          controller: 'ProjectsCtrl'
        }).
        when('/projects/:projectId', {
          templateUrl: '/assets/angular/views/projects/project.html',
          controller: 'ProjectCtrl'
        }).
        otherwise({
          redirectTo: '/projects'
        });

        $locationProvider.html5Mode(true);
    }]);

/*  app.controller('TasksCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('TaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CreateTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('EditTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CommentsCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CreateCommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);*/