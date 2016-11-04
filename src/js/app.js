import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
import 'aframe-bmfont-text-component';
// import 'aframe-particle-system-component'
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import PodLayout from './components/PodLayout';
import Floor from './components/Floor';
import Sky from './components/Sky';
import Control from './components/Control';
import partTexture from '../assets/images/kitten.png'
import floorTexture from '../assets/images/circuit.jpg'
// require('aframe');

var physics = require('aframe-physics-system');
physics.registerAll();
var extras = require('aframe-extras');
AFRAME.registerComponent('sphere-collider', extras.misc['sphere-collider']);
AFRAME.registerComponent('grab', extras.misc['grab']);

class VRScene extends React.Component{
    render () {
        return(
            <a-scene id="sceneobj" stats physics="debug: true">
                <a-assets>
                    <img  id="floor" src="../assets/images/circuit.jpg"  />
                </a-assets>
                <Sky color="#000" />
                <Entity camera id="player" look-controls wasd-controls 
                   jump-ability={{maxJumps: '3'}} position="0 0.2 0" >
                 </Entity>
                <Entity id="light" light={{type: 'point', color: '#3E72E8', intensity: '1.6'}} position="4.6 19 -9.00" />
                <Control hand="left" />
                <Control hand="right" />
                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));