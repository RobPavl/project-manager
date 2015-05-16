var app = angular.module('todoList', ['ngRoute', 'ngResource'])

  app.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects) {

    Projects.query({})
    .$promise.then(function(data) {
      $scope.projects = data;
      console.log('$scope.projects[0]');
      console.log($scope.projects[2]);
    });

    $scope.editingProject=true;
    console.log('$scope.projects');
    console.log($scope.projects);
  }]);

  app.controller('ProjectCtrl', ['$scope', '$routeParams', 'Projects', function ($scope, $routeParams, Projects) {
    $scope.projectId = $routeParams.projectId;

    Projects.get({projectId: $scope.projectId})
    .$promise.then(function(data) {
      $scope.project = data;
      console.log('$scope.project');
      console.log($scope.project);

    });
    // $scope.project = PROJECTS[$scope.projectId-1];

    $scope.editProject = function(){
      console.log('Editing project');
      $scope.editingProject = true;
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

  app.controller('TasksCtrl', ['$scope', 'Tasks',function ($scope, Tasks) { //!!!!!!!!
    //$scope.tasks = TASKS1;
    Tasks.query({})
    .$promise.then(function(data) {
      $scope.tasks = data; });
  }]);

    // app.controller('TaskCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    //   };
    // }]);

/*
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