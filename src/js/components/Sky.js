import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity
    id="sky"
    geometry={{primitive: 'sphere', radius: 400}}
    material={{ shader: 'flat', src: "#stars"}}
    scale="1 1 -1"
    />
);
