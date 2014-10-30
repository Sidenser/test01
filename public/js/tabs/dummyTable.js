define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var dummyTable = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      $('.menu li').removeClass('active');
      $('.menu li a[href="dummyTable"]').parent().addClass('active');
      this.$el.html('Content table');

    }
  });

  return dummyTable;

});
