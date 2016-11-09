/**
 * Simple y position tracker to determine if an object has fallen off the platform
 */
module.exports = {
    /**
 * UI modal component for A-Frame.
 */
    schema: {
        trigger: {
            default: 'podgrip'
        }
    },

    init: function() { 
        this.el.addEventListener(this.data.trigger, this.eventHandler.bind(this));

        this.podUI = this.el.parentNode.querySelector('#pod-ui-holder');
        this.pod = this.el;

        // Helpful for debugging the UI
        // [].slice.call(this.podUI.querySelectorAll('.pod')).forEach((el) => el.emit('podgrip'));

    },

    eventHandler: function(evt) {
            this.podObject = this.pod.object3D;
            this.newPosition = new THREE.Vector3(this.podObject.position.x - 0.5, this.podObject.position.y + .5, this.podObject.position.z + 1);
            this.podUI.object3D.position.copy(this.newPosition);
            [].slice.call(this.podUI.querySelectorAll('.pod-ui-text')).forEach((el) => el.emit('podFadeIn'));

    },

    update: function (oldData) {},

    remove: function() {}

}