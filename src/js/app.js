// 3rd party components
import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
import 'aframe-text-component';
// Using custom version
// import 'aframe-vive-cursor-component';
import 'aframe-look-at-component';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'aframe-gif-shader';
import 'aframe-fit-texture-component';
import './aframe-components/ForcePush';
import './aframe-components/HighTower';
import './aframe-components/ViveCursor';
import { SpriteText2D, textAlign } from 'three-text2d';
// import 'aframe-selectable-component';
import './fonts/exo';
import './shaders/glow-shader';
import './components/SpriteLabel';

// React components
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import PodLayout from './components/PodLayout';
import Floor from './components/Floor';
import Sky from './components/Sky';
import BlinkingLight from './components/BlinkingLight';
import Assets from './components/Assets';
import WorldLights from './components/WorldLights';
import Splash from './components/Splash';
import ClusterInfo from './components/ClusterInfo';
import Control from './components/Control';
import partTexture from '../assets/images/kitten.png';
import floorTexture from '../assets/images/grid.jpg';
// Patched sphere module to fix deprecation warning
var theVoid = require ('./aframe-components/theVoid')
var k8sUI = require ('./aframe-components/k8s-ui')
var podUI = require ('./aframe-components/pod-ui')
var podHide = require ('./aframe-components/pod-ui-hide')
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
AFRAME.registerComponent('pod-ui', podUI);
AFRAME.registerComponent('pod-ui-hide', podHide);

class VRScene extends React.Component{
    render () {
        return(
            <a-scene id="sceneobj" stats physics="debug: false" >

                <Entity position="0 10 0" particle-system="preset: dust; maxAge: 20; randomize: false;  positionSpread: 0 0 0;  rotationAngle: 0; accelerationValue: 0 1 0; accelerationSpread: 1 0 1; velocityValue: 0 1 0; velocitySpread: 1 1 1; size: 0.2; particleCount:1000; maxParticleCount: 1000; " />

                <Assets />
                <Sky />

                <Entity id="logo-holder" 
                animation__scale="property: rotation; easing: linear; dur: 20000; loop: true; to: 0 360 0"
                position="0 8 0">
                    <a-obj-model  
                    high-tower
                    id="k8s-logo"
                    scale="0.05 0.05 0.05"  
                    position="0 0 -2" 
                    src="#k8smodel" 
                    ></a-obj-model>
                    <a-entity id="kelsey-em" visible="false" position="0 0 0" particle-system=" maxParticleCount: 200; preset: dust; size: 15; particleCount:200; texture: #kelsey" ></a-entity>
                </Entity>
                
                <Entity camera id="player" 
                look-controls 
                wasd-controls 
                position="0 0.2 0" >
                </Entity>

                <Entity k8s-ui visible="false">
                    <ClusterInfo />
                </Entity>

                <WorldLights />
                <BlinkingLight lpos="49 .24 -49" />
                <BlinkingLight lpos="49 .24 49" />
                <BlinkingLight lpos="-49 .24 -49" />
                <BlinkingLight lpos="-49 .24 49" />

                <Control hand="left" />
                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));