import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    id="sky"
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', color: props.color}}
    scale="1 1 -1"/>
);
