define(['module'], function (module) {
    
    'use strict';

    var paper = Raphael(200, 10 , 50, 50)

    var icon = "M17.5,19.508V8.626h-3.999v10.881c-1.404,0.727-2.375,2.178-2.375,3.869c0,2.416,1.959,4.375,4.375,4.375s4.375-1.959,4.375-4.375C19.876,21.686,18.905,20.234,17.5,19.508zM20.5,5.249c0-2.757-2.244-5-5.001-5s-4.998,2.244-4.998,5v12.726c-1.497,1.373-2.376,3.314-2.376,5.4c0,4.066,3.31,7.377,7.376,7.377s7.374-3.311,7.374-7.377c0-2.086-0.878-4.029-2.375-5.402V5.249zM20.875,23.377c0,2.963-2.41,5.373-5.375,5.373c-2.962,0-5.373-2.41-5.373-5.373c0-1.795,0.896-3.443,2.376-4.438V5.251c0-1.654,1.343-3,2.997-3s3,1.345,3,3v13.688C19.979,19.934,20.875,21.582,20.875,23.377zM22.084,8.626l4.5,2.598V6.029L22.084,8.626z"

    function draw(){
    	paper.path(icon).attr({fill: "#000", stroke: "none"})
    }

    function erase(){
    	paper.remove()
    }

    function init(callback){ 
    	draw()
    	callback(null, {status: 'initialized'})
    }

    function destroy(callback){
    	console.log('destroy')
    	erase()
    	callback(null, { status : 'destroyed'})
    }

    var core = { 
    	name : 'core', 
    	init : init,
    	destroy : destroy
    }

    return core;
})