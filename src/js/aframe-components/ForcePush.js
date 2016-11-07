// Taken from Don Mccurdy extras - https://github.com/donmccurdy/aframe-extras/blob/master/examples/force-push/index.html
AFRAME.registerComponent('force-pushable', {
  schema: {
    force: { default: 100 }
  },
  init: function () {
    this.pStart = new THREE.Vector3();
    this.sourceEl = this.el.sceneEl.querySelector('[camera]');
    this.el.addEventListener('click', this.forcePush.bind(this));
  },
  forcePush: function () {
    var force,
        el = this.el,
        pStart = this.pStart.copy(this.sourceEl.getComputedAttribute('position'));
    // Compute direction of force, normalize, then scale.
    force = el.body.position.vsub(pStart);
    force.normalize();
    force.scale(this.data.force, force);
    el.body.applyImpulse(force, el.body.position);
  }
});