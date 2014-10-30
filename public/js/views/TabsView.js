define([
	'jquery',
	'underscore',
	'backbone',
	'views/TabView'
], function($, _, Backbone, TabView){

	var TabsView = Backbone.View.extend({
		initialize: function(){
			this.render();
			console.log('asdasdsd')
		},
		render: function() {
			console.log('asdasdsd')
			this.collection.each(function(tabModel) {

				var tabView = new TabView({model: tabModel});
				$('#nav').append(tabView.render().el);
			}, this);

			return this;
		}
	});

	return TabsView;
});
