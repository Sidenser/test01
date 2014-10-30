define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){

	var TabView = Backbone.View.extend({
		tagName: 'li',
		render: function()
		{
			this.$el.html( $('<a>', {href:this.model.get('id')}).html(this.model.get('title')));
			return this;
		},
		events:{
			'click a': 'navigator'
		},
		navigator: function  (e) {
			var url = $(e.currentTarget).attr('href');
			window.history.pushState('', '', url);
			Backbone.history.loadUrl(url);
			e.preventDefault();
		}
	});

	return TabView;
});
