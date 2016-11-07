import React from 'react';
import {Entity} from 'aframe-react';

export default props => (
            <Entity static-body 
            id="floor"
            className="floor"
            geometry={{primitive: 'plane', width:'100', height: '100'}}
            rotation="-90 0 0" position="0 0 0" 
            material={{ metalness: '0.8', roughness: '0.6',  src: "#floor", repeat: '100 100'}} />
);