angular.module('todoapp', ['firebase']);

function TodoCtrl($scope, angularFire) {

  var fireData = new Firebase('https://angular-todos-coding.firebaseio.com/');

  angularFire(fireData, $scope, 'todos');

  // Initialize list of todos
  $scope.todos = [];
  
  // Function to add new todo
  $scope.addTodo = function() {
    var newTodo = {
      done: false,
      text: $scope.todoText
    };
    $scope.todos.push(newTodo);
    $scope.todoText = '';
  };
  
  // Function to delete a todo
  $scope.removeTodo = function(start) {
    $scope.todos.splice(start, 1);
  };

  // Function to move an item
  $scope.move = function(index, direction) {
    // Handle moving up
    if (direction === 'up') {
        if (index === 0) {
          return;
        }
        index = index -1;
    }

    // Handle moving down
    if (direction === 'down') {
      if (index === $scope.todos.length - 1) {
        return;
      }
    }

    var todo = $scope.todos[index];
    $scope.todos.splice(index + 2, 0, todo);
    $scope.todos.splice(index, 1);
    };
}