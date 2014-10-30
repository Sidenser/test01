define([
	'jquery',
	'underscore',
	'backbone',
	'collections/TabsCollection',
	'views/TabsView'
], function($, _, Backbone, TabsCollection, TabsView) {

		var AppRouter = Backbone.Router.extend({
			navigate: function (url) {
				window.history.pushState('', '', url);
				Backbone.history.loadUrl(url);
			},
			register: function (route, name, path) {
				this.route(route, name, function () {
					require([path], function (module) {
						var view = new module();
						view.render();
						$('title').html(name);
					});
				});
			}});
		var initialize = function () {

			var tabsCollection = new TabsCollection();

			var app_router = new AppRouter;

			app_router.register('*actions', 'DashboardPage', 'views/dashboard');

			Backbone.history.start({pushState: true, root: "/"});

			tabsCollection.fetch().done(function () {
				tabsCollection.comparator = function(model) {
					return model.get('order');
				};
				tabsCollection.sort();
				var tabsView = new TabsView({collection: tabsCollection});
				tabsCollection.each(function (model) {
					app_router.register(model.get('id'), model.get('title'), model.getPath());
				});
				app_router.navigate(Backbone.history.fragment, true);
			});
			$('a[backbone-router]').click(function(e){
				var url = $(this).attr('href');
				window.history.pushState('', '', url);
				Backbone.history.loadUrl(url);
				e.preventDefault();
			});
		};
		return {
			initialize: initialize
		};
	}
);
