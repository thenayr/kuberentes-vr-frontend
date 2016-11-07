import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
    <Entity id="world-lights">
        <Entity id="spotlight1" light={{type: "spot", angle: "20.72", intensity: "1.8", distance: "17.42", decay:"-0.20", color: "#30a9ff"}} position=".29 7.29, 11.22" />
        <Entity id="spotlight2" light={{type: "spot", angle: "20.72", intensity: "1.8", distance: "17.42", decay:"-0.20", color: "#30a9ff"}} rotation="0 -180 0" position=".29 7.29, -11.22" />
        <Entity id="top-light" light={{type: 'point', color: '#fff', intensity: '.62'}} position="0 28.78 0" />
        <Entity id="world-light" light={{type: 'directional', color: '#fff', intensity: '0.28'}} position="-146 80 0 " />
        <Entity id="world-light-2" light={{type: 'directional', color: '#fff', intensity: '0.28'}} position="146 80 0 " />
        <Entity id="world-light-3" light={{type: 'directional', color: '#fff', intensity: '0.28'}} position="0 80 146 " />
        <Entity id="world-light-4" light={{type: 'directional', color: '#fff', intensity: '0.28'}} position="0 80 -146 " />
    </Entity>
);