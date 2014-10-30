define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var dummyChart = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      $('.menu li').removeClass('active');
      $('.menu li a[href="dummyChart"]').parent().addClass('active');
      this.$el.html('Chart content');

    }
  });

  return dummyChart;

});
