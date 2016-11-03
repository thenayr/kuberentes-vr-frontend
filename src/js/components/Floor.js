import React from 'react';
import {Entity} from 'aframe-react';
import floorTexture from '../../assets/images/circuit.jpg'

export default props => (
            <Entity static-body 
            id="floor"
            geometry={{primitive: 'plane', width:'300', height: '300'}}
            rotation="-90 0 0" position="0 -0.5 0" 
            material={{ metalness: '1.0', roughness: '0.6',  src: `url(${floorTexture})`, repeat: '300 300'}} />
);