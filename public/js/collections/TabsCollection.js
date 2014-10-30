define([
  'jquery',
  'underscore',
  'backbone',
  'models/TabModel'
], function($, _, Backbone, TabModel){
	var TabsCollection = Backbone.Collection.extend({
		model: TabModel,
		url: "/tabs.json"
  });

  return TabsCollection;
});
