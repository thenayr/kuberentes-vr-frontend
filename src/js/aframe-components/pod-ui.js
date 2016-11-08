/**
 * Simple y position tracker to determine if an object has fallen off the platform
 */
module.exports = {
    /**
 * UI modal component for A-Frame.
 */

    init: function() { 
        // this.el.addEventListener(this.data.trigger, this.eventHandler.bind(this));

        this.podUI = this.el.querySelector('#pod-ui-holder');
        this.pod = this.el.querySelector('.pod');
        // position = pod.position.copy
        this.podUI.object3D.position.copy(this.pod.object3D.position);

        // this.yaxis = new THREE.Vector3(0, 1, 0);
        // this.zaxis = new THREE.Vector3(0, 0, 1);

        // this.pivot = new THREE.Object3D();
        // this.podUI.object3D.position.set(0, this.cameraEl.object3D.getWorldPosition().y + 0.8, this.data.zpos);

        // this.el.sceneEl.object3D.add(this.pivot);
        // this.pivot.add(this.podUI.object3D);

    },

    tick: function() {
        // Might need this 
        // this.podUI = this.el.querySelector('#pod-ui');
        // this.pod = this.el.querySelector('.pod');
        this.podObject = this.pod.object3D;
        this.newPosition = new THREE.Vector3(this.podObject.position.x - 0.5, this.podObject.position.y + .5, this.podObject.position.z + 1);

        // position = pod.position.copy
        // this.podUI.object3D.position.x.copy(this.pod.object3D.position.x);
        // this.podUI.object3D.position.z.copy(this.pod.object3D.position.z);
        this.podUI.object3D.position.copy(this.newPosition);
    },

    update: function (oldData) {},

    remove: function() {}

}