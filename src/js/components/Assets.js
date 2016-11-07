import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
<a-assets>
    <a-asset-item id="k8smodel" src="../assets/models/yellow-k8s.obj" />
    <img  id="floor" src="../assets/images/grid.jpg"  />
    <img  id="nginx" src="../assets/images/nginx.png"  />
    <img  id="stars" src="../assets/images/stars.png"  />
    <audio id="space" src="../assets/sounds/wind1.mp3"  />
    <audio id="port" src="../assets/sounds/port.wav" />
</a-assets>
);
