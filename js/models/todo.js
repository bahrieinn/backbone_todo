// js/models/todo.js

// set 'app' to empty object if it is previously defined
var app = app || {};

app.Todo = Backbone.Model.extend({
  
  // Define default values for our Todo Model
  defaults: {
    title: '',
    completed: false
  },

  // Create a 'toggle' method to switch the 'completed' state of todo item
  toggle: function() {
    //this refers to instance of Todo Model
    // we grab the value of 'completed' and set it to the opposite using '!'
    this.save({
      completed: !this.get('completed')
    });
  }
})
