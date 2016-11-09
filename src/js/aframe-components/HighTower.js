AFRAME.registerComponent('high-tower', {
  init: function () {
    this.el.addEventListener('click', this.unHideEmitter.bind(this));
  },
  unHideEmitter: function () {
    this.el.sceneEl.querySelector('#kelsey-em').setAttribute('visible', true);
  }
});