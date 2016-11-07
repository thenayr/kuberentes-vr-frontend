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
        grab />
        <Entity static-body={{shape: 'sphere', sphereRadius: '0.02'}} 
        vive-controls={{hand: 'left'}}  
        className="controllers" 
        sphere-collider="objects: .pod;" 
        teleport-controls
        grab />
    </Entity>

);