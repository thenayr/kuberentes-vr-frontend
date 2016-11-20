import {Entity} from 'aframe-react';
import React from 'react';


export default props => (
    <Entity id="controller-ent">
        <Entity static-body={{shape: 'sphere', sphereRadius: '0.02'}} 
        vive-controls={{hand: 'right'}}  
        vive-cursor
        className="controllers" 
        sphere-collider="objects: .pod;" 
        teleport-controls
        grab >
            <a-obj-model  
            class="k8s-hands"
            scale="0.001 0.001 0.001"  
            position="0 0.03 0.03" 
            rotation="90 0 0"
            animation__scale="property: rotation; easing: easeInOutSine; dur: 2000; loop: true; to: 90 0 720"
            animation__hover2="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; loop: true; to: 0 0.06 0.03"
            src="#k8slogo" 
            ></a-obj-model>
        </Entity>

        <Entity static-body={{shape: 'sphere', sphereRadius: '0.02'}} 
        vive-controls={{hand: 'left'}}  
        className="controllers" 
        sphere-collider="objects: .pod;" 
        teleport-controls
        grab >
            <a-obj-model  
            class="k8s-hands"
            scale="0.001 0.001 0.001"  
            position="0 0.03 0.03" 
            rotation="90 0 0"
            animation__scale="property: rotation; easing: easeInOutSine; dur: 2000; loop: true; to: 90 0 720"
            animation__hover2="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; loop: true; to: 0 0.06 0.03"
            src="#k8slogo" 
            ></a-obj-model>
        </Entity>
    </Entity>

);
