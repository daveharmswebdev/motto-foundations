function TodoController() {
  this.newTodo = '';
  this.list = [
    { title: 'First todo item!', completed: true},
    { title: 'Second todo item!', completed: false},
    { title: 'Third todo item!', completed: false},
  ];

  this.addTodo = function () {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    })
    this.newTodo = '';
  }

  this.removeTodo = function (item, index) {
    var newList = this.list.filter(function(item, idx) {
      return idx != index;
    })
    this.list = newList;
  }
}

angular
  .module('app')
  .controller('TodoController', TodoController);
