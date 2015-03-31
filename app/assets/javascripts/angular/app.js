var app = angular.module('todoList', [])
  app.controller('TaskCtrl', ['$scope', function ($scope) {
    $scope.tasks =[
          {"body":"Знайти квитки до Києва", "deadline": "26 бер. 2015", "is_checked": false, "id": 1, comments: [{'body':'I think, it must be faster than else', 'file':false},
  	 {'body':'Kill them all!', 'file':false}]},
          {"body":"Cпакувати речі", "deadline":"27 бер. 2015", "is_checked": true, "id": 2, comments: [{'body':'I think, it must be faster than else', 'file':false},
  	 {'body':'Хто не скаче, той - москаль!', 'file':false}]},
          {"body":"Поїхати на двірець", "deadline":"27 бер. 2015 22.15", "is_checked": false, "id": 3, comments: [{'body':'I think, it must be faster than else', 'file':false},
  	 {'body':'комуняку на гілляку!', 'file':false}]}]

    $scope.editTask = false;

    $scope.showEdition = function(id, $index){
      $scope.editTask = true;
      $scope.editedText = $scope.tasks[$index].body;
      $scope.editedId = $scope.tasks[$index].id;
	}

	$scope.save = function(id, $index){
      $scope.editTask = false;
	  //saving $scope.editedText
	  //$scope.editedTask = $scope.tasks[$index];
	}

	$scope.comentary = false;

    $scope.showComment = function(id, $index){
     console.log('showComment');
      $scope.comentary = true;
      $scope.seenComment = $scope.tasks[$index].comments[0].body;
      $scope.taskId = $scope.tasks[$index].id;
	}
  }]);

  app.controller('ProjectCtrl', ['$scope', function ($scope) {
    $scope.projects=[{'name': "Фігня якась"},
    {'name':'Ще одна фігня'}]
  }]);

