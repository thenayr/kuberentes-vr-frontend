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
        this.podUI.setAttribute('visible', true);
        // [].slice.call(this.podUI.querySelectorAll('.pod-ui-text')).forEach((el) => el.emit('podFadeIn'));
        // this.pod = this.el.querySelector('.pod');
        // position = pod.position.copy
        // this.podUI.object3D.position.copy(this.pod.object3D.position);

        // this.yaxis = new THREE.Vector3(0, 1, 0);
        // this.zaxis = new THREE.Vector3(0, 0, 1);

        // this.pivot = new THREE.Object3D();
        // this.podUI.object3D.position.set(0, this.cameraEl.object3D.getWorldPosition().y + 0.8, this.data.zpos);

        // this.el.sceneEl.object3D.add(this.pivot);
        // this.pivot.add(this.podUI.object3D);

    },

    eventHandler: function(evt) {
        console.log("Something grabbed");
        if (this.podUI.getAttribute('visible') === false) {

            // var direction = this.zaxis.clone();
            // direction.applyQuaternion(this.cameraEl.object3D.quaternion);
            // var ycomponent = this.yaxis.clone().multiplyScalar(direction.dot(this.yaxis));
            // direction.sub(ycomponent);
            // direction.normalize();

            // this.pivot.quaternion.setFromUnitVectors(this.zaxis, direction);
            // this.pivot.position.copy(this.cameraEl.object3D.getWorldPosition());

            this.podUI.setAttribute('visible', true);
            [].slice.call(this.podUI.querySelectorAll('.pod-ui-text')).forEach((el) => el.emit('podFadeIn'));
            // this.podUI.querySelector('.pod-ui-text').emit('podFadeIn');

            
            // this.el.querySelector('#k8s-ui').emit('fadeIn');
            // this.el.querySelector('#cluster-info-holder').emit('loadmenu');
            // this.el.querySelector('#cluster-info-holder').emit('menudown');
            

        } else if (this.podUI.getAttribute('visible') === true) {
            console.log("Fading out now");
            this.podUI.setAttribute('visible', false);

        }
        
    },

    update: function (oldData) {},

    remove: function() {}

}