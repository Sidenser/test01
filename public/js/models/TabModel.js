define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var TabModel = Backbone.Model.extend({
	  getPath:function(){
		  var path = this.get('path');
		  return path.replace(/\.[^/.]+$/, "");
	  }
  });

  return TabModel;

});
