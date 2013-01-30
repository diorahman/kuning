require(['js/jambul', 'raphael'], function(jambul){

    var app = jambul.kuning

    function load(name, callback){
        app.load(name, callback)
    }

    function unload(name, callback){
        app.unload(name, callback)
    }

    function info(){
        var context = require.s.contexts['_'];
        console.log(context.defined)
        if(context.defined['js/plugins/core'] != null)
            console.log('core loaded')
        else
            console.log('core unloaded')
    }

    document.getElementById('load-core').onclick = function(){
        load("core", function(err, plugin){
            info()
        })
    }

    document.getElementById('unload-core').onclick = function(){
        unload("core", function(err, msg){
            info()
        })
    }

    info()

})