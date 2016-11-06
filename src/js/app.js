import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
import 'aframe-text-component';
import 'aframe-vive-cursor-component';
import 'aframe-selectable-component';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import './fonts/exo';
import './shaders/glow-shader';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import PodLayout from './components/PodLayout';
import Floor from './components/Floor';
import Sky from './components/Sky';
import ClusterInfo from './components/ClusterInfo';
import Control from './components/Control';
import partTexture from '../assets/images/kitten.png';
import floorTexture from '../assets/images/grid.jpg';
// Patched sphere module to fix deprecation warning
var theVoid = require ('./aframe-components/theVoid')
var k8sUI = require ('./aframe-components/k8s-ui')
var glow = require ('./aframe-components/glow')
var sphereCollider = require('./vendor/sphere-collider-patched');
var physics = require('aframe-physics-system');
var extras = require('aframe-extras');

physics.registerAll();
AFRAME.registerComponent('sphere-collider', sphereCollider);
AFRAME.registerComponent('grab', extras.misc['grab']);
AFRAME.registerComponent('the-void', theVoid);
AFRAME.registerComponent('glow', glow);
AFRAME.registerComponent('k8s-ui', k8sUI);

class VRScene extends React.Component{
    render () {
        return(
            <a-scene id="sceneobj" stats physics="debug: false" >
                <a-assets>
                    <a-asset-item id="k8smodel" src="../assets/models/yellow-k8s.obj" />
                    <img  id="floor" src="../assets/images/grid.jpg"  />
                    <audio id="space" src="../assets/sounds/wind1.mp3"  />
                    <audio id="port" src="../assets/sounds/port.wav" />
                </a-assets>
                <Sky color="#000" />
                <Entity id="logo-holder" 
                animation__scale="property: rotation; easing: linear; dur: 20000; loop: true; to: 0 360 0"
                position="0 8 0">
                    <a-obj-model  
                    id="k8s-logo"
                    scale="0.05 0.05 0.05"  
                    position="0 0 -2" 
                    src="#k8smodel" 
                    ></a-obj-model>
                </Entity>
                <Entity light={{type: "spot", angle: "20.72", intensity: "1.8", distance: "17.42", decay:"-0.20", color: "#30a9ff"}} position=".29 7.29, 11.22" />
                <Entity light={{type: "spot", angle: "20.72", intensity: "1.8", distance: "17.42", decay:"-0.20", color: "#30a9ff"}} rotation="0 -180 0" position=".29 7.29, -11.22" />
                <Entity camera id="player" look-controls wasd-controls 
                   jump-ability={{maxJumps: '3'}} position="0 0.2 0" >
                   <Entity position="0.1 0 0.4" />
                </Entity>
                <Entity k8s-ui visible="false">
                    <ClusterInfo />
                </Entity>
                <Entity id="light" light={{type: 'point', color: '#23D0EC', intensity: '1.62'}} position="0 28.78 0" />
                <Entity id="light" light={{type: 'ambient', color: '#2BFECB', intensity: '1.14'}} position="0 0 0 " />
                <Entity id="light" light={{type: 'directional', color: '#fff', intensity: '0.74'}} position="-146 80 0 " />
                <Control hand="left" />
                <Control hand="right" />
            <a-entity position="0 10 0" particle-system="preset: dust; maxAge: 20; randomize: false;  positionSpread: 0 0 0;  rotationAngle: 0; accelerationValue: 0 1 0; accelerationSpread: 1 0 1; velocityValue: 0 1 0; velocitySpread: 1 1 1; size: 0.2; particleCount:5000; maxParticleCount: 1000; "></a-entity>
                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));