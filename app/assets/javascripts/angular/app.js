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

  app.controller('ProjectCtrl', ['$scope', '$routeParams', 'Projects', 'Tasks', 'Comments', function ($scope, $routeParams, Projects, Tasks, Comments) {
    $scope.projectId = $routeParams.projectId;
    $scope.taskId = $routeParams.taskId;
    console.log("$scope");
    console.log($scope);
    Projects.get({projectId: $scope.projectId})
    .$promise.then(function(data) {
      $scope.project = data;
      console.log('$scope.project');
      console.log($scope.project);

      Tasks.query({projectId: $scope.projectId})
        .$promise.then(function(data) {
          $scope.tasks = data;
          //angular.forEach($scope.tasks, function(task, i){
          //  Comments.query({projectId: $scope.projectId, taskId: task.id})
          //    .$promise.then(function(data) {
          //      $scope.tasks[i].comments = data;

          //    });
          //});
        });
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
    Tasks.query({projectId: $scope.projectId})
    .$promise.then(function(data) {
      $scope.tasks = data; });
  }]);

  app.controller('CommentsCtrl', ['$scope', 'Comments', function ($scope) {
    Comments.query({projectId: $scope.projectId, taskId: $scope.taskId})
    .$promise.then(function(data) {
      $scope.comments = data;
    });
  }]);

/*
  app.controller('CreateTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('EditTaskCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);



  app.controller('CommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);

  app.controller('CreateCommentCtrl', ['$scope', function ($scope) {
    //$scope.
  }]);*/