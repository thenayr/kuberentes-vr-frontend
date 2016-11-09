import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
<a-assets>
    <a-asset-item id="k8smodel" src="../assets/models/yellow-k8s.obj" />
    <a-asset-item id="k8slogo" src="../assets/models/k8s-logo.obj" />
    <img  id="floor" src="../assets/images/grid.jpg"  />
    <img  id="nginx" src="../assets/images/nginx.jpg"  />
    <img  id="wordpress" src="../assets/images/wordpress.jpg"  />
    <img  id="kelsey" src="../assets/images/kelsey.png"  />
    <img  id="redis" src="../assets/images/redis.jpg"  />
    <img  id="k8s" src="../assets/images/k8s.jpg"  />
    <img  id="hacker" src="../assets/images/hack-time.gif"  />
    <img  id="stars" src="../assets/images/stars.png"  />
    <audio id="space" src="../assets/sounds/wind1.mp3"  />
    <audio id="port" src="../assets/sounds/port.wav" />
</a-assets>
);
