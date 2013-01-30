define(['module'], function (module) {
    'use strict';

    var exports = {}

    function Kuning(){
    	this.plugins = {}
    	this.instance = null
    }

    Kuning.prototype.load = function(name, callback){

    	var self = this;

    	require(['js/plugins/' + name], function(plugin){
    		if(plugin){

    			// TODO: plugin assertion
    			plugin.init(function(err, msg){
    				if(err) throw err
    				self.plugins[name] = plugin
    				callback(null, plugin)
    			})
    		}
    	})

    }

    Kuning.prototype.unload = function(name, callback){

    	var self = this;
    	var plugin = self.plugins[name]

    	if(plugin){
    		plugin.destroy(function(err, msg){
    			if(err) throw err
    			require.undef('js/plugins/' + name)		
    			callback(null, msg)
    		})
    		
    	}
    }

    Kuning.prototype.getInstance = function(){
    	var self = this;
    	if(self.instance === null){
    		self.instance = new Kuning()
    	}

    	return self.instance
    }

    exports.kuning = (new Kuning).getInstance()

    return exports
});