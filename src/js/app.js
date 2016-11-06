import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
import 'aframe-text-component';
import 'aframe-vive-cursor-component';
import 'aframe-selectable-component';
import 'aframe-animation-component';
import './fonts/exo';
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
            <a-scene id="sceneobj" stats physics="debug: true" >
                <a-assets>
                    <a-asset-item id="k8smodel" src="../assets/models/yellow-k8s.obj" />
                    <img  id="floor" src="../assets/images/grid.jpg"  />
                    <audio id="space" src="../assets/sounds/wind1.mp3"  />
                    <audio id="port" src="../assets/sounds/port.wav" />
                </a-assets>
                <Sky color="#000" />
                <a-obj-model  
                id="k8s-logo"
                scale="0.05 0.05 0.05"  
                position="0 10 0" 
                src="#k8smodel" 
                ></a-obj-model>
                <Entity camera id="player" look-controls wasd-controls 
                   jump-ability={{maxJumps: '3'}} position="0 0.2 0" >
                   <Entity position="0.1 0 0.4" />
                </Entity>
                <Entity k8s-ui visible="false">
                    <ClusterInfo />
                </Entity>
                <Entity id="light" light={{type: 'point', color: '#3E72E8', intensity: '3.84'}} position="0 64 0" />
                <Entity id="light" light={{type: 'ambient', color: '#fff', intensity: '0.3'}} position="0 0 0 " />
                <Control hand="left" />
                <Control hand="right" />
                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));