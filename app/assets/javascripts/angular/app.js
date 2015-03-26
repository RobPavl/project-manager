var app = angular.module('todoList', [])
  app.controller('TaskCtrl', ['$scope', function ($scope) {
    $scope.tasks =[
          {"text":"Знайти квитки до Києва", "date": "26 бер. 2015", "done": false, "id": 1, comments: [{'text':'I think, it must be faster than else', 'file':false},
  	 {'text':'Kill them all!', 'file':false}]},
          {"text":"Cпакувати речі", "date":"27 бер. 2015", "done": true, "id": 2, comments: [{'text':'I think, it must be faster than else', 'file':false},
  	 {'text':'Хто не скаче, той - москаль!', 'file':false}]},
          {"text":"Поїхати на двірець", "date":"27 бер. 2015 22.15", "done": false, "id": 3, comments: [{'text':'I think, it must be faster than else', 'file':false},
  	 {'text':'комуняку на гілляку!', 'file':false}]}]

    $scope.editTask = false;

    $scope.showEdition = function(id, $index){
      $scope.editTask = true;
      $scope.editedText = $scope.tasks[$index].text;
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
      $scope.seenComment = $scope.tasks[$index].comments[0].text;
      $scope.taskId = $scope.tasks[$index].id;
	}
  }]);
  
  app.controller('ProjectCtrl', ['$scope', function ($scope) {
  	$scope.text = 'First progect';
  }]);
