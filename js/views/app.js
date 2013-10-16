// js/views/app.js

var app = app || {}

// The Application
// ----------------
//
//
// Our overall AppView is the top-level piece of UI.

app.AppView = Backbone.View.extend({
  
  // Bind to existing skeleton of app in HTML
  el: '#todoapp',

  statsTemplate: _.template( $('#stats-template').html() ),
  
  
  // At initialization bind relevant events on Todos collection, when items are added or changed.
  initialize: function() {
    this.allCheckbox = this.$('#toggle-all')[0];
    this.$input = this.$('#new-todo');
    this.$footer = this.$('#footer');
    this.$main = this.$('#main');

    this.listenTo(app.Todos, 'add', this.addOne);
    this.listenTo(app.Todos, 'reset', this.addAll);
  },

  addOne: function( todo ) {
    var view = new app.TodoView({ model: todo });
    $('#todo-list').append( view.render().el );
  },

  addAll: function() {
    this.$('#todo-list').html('');
    app.Todos.each(this.addOne, this);
  }

});
