import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
    <Entity static-body={{shape: 'sphere', sphereRadius: '0.02'}} vive-controls={{hand: `${props.hand}`}} className="controllers" sphere-collider="objects: .throwable;" teleport-controls grab />

);