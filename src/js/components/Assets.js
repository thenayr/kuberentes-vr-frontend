import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
<a-assets>
    <a-asset-item id="k8smodel" src="../assets/models/yellow-k8s.obj" crossorigin="anonymous"/>
    <a-asset-item id="k8slogo" src="../assets/models/k8s-logo.obj" crossorigin="anonymous"/>
    <img  id="floor" src="../assets/images/grid.jpg" crossorigin="anonymous" />
    <img  id="nginx" src="../assets/images/nginx.jpg" crossorigin="anonymous" />
    <img  id="wordpress" src="../assets/images/wordpress.jpg" crossorigin="anonymous" />
    <img  id="kelsey" src="../assets/images/kelsey.png" crossorigin="anonymous" />
    <img  id="ubuntu" src="../assets/images/ubuntu.png" crossorigin="anonymous" />
    <img  id="redis" src="../assets/images/redis.jpg" crossorigin="anonymous" />
    <img  id="k8s" src="../assets/images/k8s.jpg" crossorigin="anonymous" />
    <img  id="stars" src="../assets/images/stars.png" crossorigin="anonymous" />
</a-assets>
);
