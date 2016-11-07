import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
    <Entity geometry="primitive: sphere; radius: 0.2"
    animation__blink={{property: 'intensity', easing: 'linear', dur: 2000, loop: true, to: 2}}
    material={`color: red; shader: flat; opacity: 0;`}
    position={props.lpos} >
        <a-animation attribute="material.opacity" from="0" to="1" repeat="indefinite" direction="alternate"> </a-animation>
        <a-light color='red' type='point' intensity="0" >
            <a-animation attribute="intensity" from="0" to=".2" repeat="indefinite" direction="alternate"> </a-animation>
        </a-light>
    </Entity>
);
