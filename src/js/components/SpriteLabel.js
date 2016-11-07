// Based on https://github.com/tizzle/aframe-sprite-component/blob/master/index.js
// And https://stemkoski.github.io/Three.js/Sprite-Text-Labels.html
AFRAME.registerComponent('sprite-label', {
    
    schema: {
        message: {
            default: 'Hello world'
        }
        // resize:{
        //     default: '1 1 1'
        // }
    },


    init: function()
    {
    },


    play: function()
    {
        // console.log( this.data.src );

        // this.map = this.textureLoader.load(this.data.src);

        // this.material = new THREE.SpriteMaterial({
        //     map: this.map
        // });

        // this.sprite = new THREE.Sprite(this.material);

        // resizeData = this.data.resize.split(' ');
        // this.sprite.scale.set( resizeData[0], resizeData[1], resizeData[2] );
        this.spritey = makeTextSprite( this.data.message, { fontsize: 14, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
	    this.spritey.position.set(0,.4,0);
        this.el.setObject3D('mesh', this.spritey);
    },


    remove: function() {
        console.log('remove sprite');
        if (this.mesh) this.el.removeObject3D('mesh');
    }

});

AFRAME.registerPrimitive('a-sprite-label', {
    defaultComponents: {
        'sprite-label': {}
    },
    mappings: {
        message: 'sprite-label.message',
    }
});

function makeTextSprite( message, parameters )
{
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "Arial";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 12;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 4;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

	// var spriteAlignment = THREE.SpriteAlignment.topLeft;
		
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
    // canvas.width = 800;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = borderThickness;
	// roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.
	
	// text color
	context.fillStyle = "rgba(255, 255, 255, 1.0)";

	context.fillText( message, borderThickness, fontsize + borderThickness);
	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: false,  } );
	var sprite = new THREE.Sprite( spriteMaterial );
	// sprite.scale.set(3,3,100);
	return sprite;	
}
module.exports.makeTextSprite = makeTextSprite;

// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
	ctx.stroke();   
}
module.exports.roundRect = roundRect;