define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var dummyList = Backbone.View.extend({
    el: $("#page"),

    render: function(){

		$('.menu li').removeClass('active');
		$('.menu li a[href="dummyList"]').parent().addClass('active');
		this.$el.html('List content');

    }
  });

  return dummyList;

});
