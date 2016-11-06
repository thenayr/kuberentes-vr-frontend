/**
 * Simple y position tracker to determine if an object has fallen off the platform
 */
module.exports = {

    init: function() {
    },

    update: function() {
        var object3D = this.el.object3D;
        var geometry = new THREE.BoxGeometry( 3, 2, 0.05 );
        var outlineMaterial1 = new THREE.MeshBasicMaterial( { color: "#26B1FC", side: THREE.BackSide } );
        this.mesh = new THREE.Mesh( geometry, outlineMaterial1 );
        this.mesh.scale.multiplyScalar(1.02);
        // this.el.setObject3D('mesh', this.mesh);
        this.el.object3D.add(this.mesh);
        
    },


    remove: function() {
    },

}