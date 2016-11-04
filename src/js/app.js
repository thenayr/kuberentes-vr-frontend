import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
import 'aframe-bmfont-text-component';
import 'aframe-vive-cursor-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import PodLayout from './components/PodLayout';
import Floor from './components/Floor';
import Sky from './components/Sky';
import Control from './components/Control';
import partTexture from '../assets/images/kitten.png'
import floorTexture from '../assets/images/circuit.jpg'
// Patched sphere module to fix deprecation warning
var sphereCollider = require('./vendor/sphere-collider-patched');
var physics = require('aframe-physics-system');
var extras = require('aframe-extras');

physics.registerAll();
AFRAME.registerComponent('sphere-collider', sphereCollider);
AFRAME.registerComponent('grab', extras.misc['grab']);

class VRScene extends React.Component{
    render () {
        return(
            <a-scene fog={{type: 'linear', color: '#63C7B2', far: '100', near: '0' }} id="sceneobj" stats physics="debug: true" >
                <a-assets>
                    <img  id="floor" src="../assets/images/circuit.jpg"  />
                </a-assets>
                <Sky color="#000" />
                <Entity camera id="player" look-controls wasd-controls 
                   jump-ability={{maxJumps: '3'}} position="0 0.2 0" >
                 </Entity>
                <Entity id="light" light={{type: 'point', color: '#3E72E8', intensity: '1.6'}} position="4.6 19 -9.00" />
                <Control hand="left" />
                <Control hand="right" cursor="vive-cursor" />
                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));