angular.module('app', [])

  .controller('MyController', function(MyFactory, $scope) {
  $scope.todoItems = [];
  $scope.finishedItems = [];
  $scope.changed = {};

  $scope.createItem = function(todoItem) {
    if (todoItem.length !== 0) {
      $scope.todoItems.push(todoItem);
      $scope.todoItem = "";
    }
  }

  $scope.change = function(item, index) {
    console.log(item, index)
    var temp = $scope.todoItems.indexOf(index);
    delete $scope.todoItems.indexOf(index);
    $scope.finishedItems.push(temp);
  }




  })

  .factory('MyFactory', function($http) {



  return{}
  })