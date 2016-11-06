import {Entity} from 'aframe-react';
import React from 'react';


export default props => (
    <Entity static-body={{shape: 'sphere', sphereRadius: '0.02'}} 
    vive-controls={{hand: `${props.hand}`}}  
    vive-cursor
    className="controllers" 
    sphere-collider="objects: .pod;" 
    teleport-controls 
    grab />

);