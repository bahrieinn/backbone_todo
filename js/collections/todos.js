// js/collections/todos.js

var app = app || {}

// Todo Collection
// ------------------
var TodoList = Backbone.Collection.extend({
  // Establish what model this collection is for
  model: app.Todo,
  
  // Save all todo items under todos-backbone namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  completed: function() {
    // _.filter is an underscore method that returns an array of items that evaluate to true
    // here we look for all todos in the collection that have a completed property set to true
    return this.filter(function(todo){
      return todo.get('completed');
    });
  },
 
  // _.without is an underscore method that takes an array, and values and returns the array with all the values removed
  // apply is a javascript method that takes a function and passes it a context, and then an array of arguments. e.g. myFunction.apply(this, [name, age])
  remaining: function() {
    return this.without.apply(this, this.completed());
  },

  nextOrder: function() {
    if ( !this.length ) {
      return 1;
    } 
    return this.last().get('order') + 1;
  },

  comparator: function(todo) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();
