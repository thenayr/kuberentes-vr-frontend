/**
 * Simple y position tracker to determine if an object has fallen off the platform
 */
module.exports = {
    /**
 * UI modal component for A-Frame.
 */

    schema: {
        trigger: {
            default: 'menudown'
        },
        zpos: {
            default: -4
        }
    },

    init: function() { 

        document.querySelector('a-scene').addEventListener(this.data.trigger, this.eventHandler.bind(this));

        this.cameraEl = document.querySelector('a-entity[camera]');

        this.yaxis = new THREE.Vector3(0, 1, 0);
        this.zaxis = new THREE.Vector3(0, 0, 1);

        this.pivot = new THREE.Object3D();
        this.el.object3D.position.set(0, this.cameraEl.object3D.getWorldPosition().y + 0.8, this.data.zpos);

        this.el.sceneEl.object3D.add(this.pivot);
        this.pivot.add(this.el.object3D);

    },

    eventHandler: function(evt) {

        if (this.el.getAttribute('visible') === false) {

            var direction = this.zaxis.clone();
            direction.applyQuaternion(this.cameraEl.object3D.quaternion);
            var ycomponent = this.yaxis.clone().multiplyScalar(direction.dot(this.yaxis));
            direction.sub(ycomponent);
            direction.normalize();

            this.pivot.quaternion.setFromUnitVectors(this.zaxis, direction);
            this.pivot.position.copy(this.cameraEl.object3D.getWorldPosition());

            this.el.setAttribute('visible', true);
            this.el.querySelector('#k8s-ui').emit('fadeIn');
            this.el.querySelector('#cluster-info-holder').emit('loadmenu');
            // this.el.querySelector('#cluster-info-holder').emit('menudown');
            

        } else if (this.el.getAttribute('visible') === true) {
            console.log("Fading out now");
            this.el.setAttribute('visible', false);

        }

    },

    update: function (oldData) {},

    remove: function() {}

}