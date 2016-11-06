/**
 * Simple y position tracker to determine if an object has fallen off the platform
 */
module.exports = {
    schema: {type: 'vec3'},

    init: function() {
        this.timeout = setInterval(this.checkPosition.bind(this), 5000);
    },

    update: function() {
        var object3D = this.el.object3D;
        var data = this.data;
    },

    remove: function() {
        clearInterval(this.timeout);
        this.el.removeObject3D(this.object3D);
    },

    checkPosition: function() {
        if(this.el.body.position.y > 0) {
            return;
        } else {
            this.el.emit('destroy');
        }
    }
}