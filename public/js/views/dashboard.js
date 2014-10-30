define([
	'jquery',
	'underscore',
	'backbone',
], function($, _, Backbone){

	var dashboard = Backbone.View.extend({
		el: $("#page"),

		render: function(){

			$('.menu li').removeClass('active');
			$('.menu li a[href="/"]').parent().addClass('active');
			this.$el.html('dashboard');

		}
	});

	return dashboard;

});
