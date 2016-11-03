import 'aframe';
import 'aframe-teleport-controls';
import 'aframe-layout-component';
// import 'aframe-extras';
import 'aframe-particle-system-component'
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import PodLayout from './components/PodLayout';
import Floor from './components/Floor';
import Sky from './components/Sky';
import partTexture from '../assets/images/kitten.png'

var physics = require('aframe-physics-system');
// var extras = require('aframe-extras');
physics.registerAll();
// extras.controls.registerAll();
// extras.misc.registerAll();

class VRScene extends React.Component{
    render () {
        return(
            <a-scene id="sceneobj" stats physics="debug: true">
            <Entity position="0 2.25 -15" particle-system={{ preset: 'dust', /*texture: `url(${partTexture})`,*/ size: '0.5' }} />
                <Sky color="#000" />
                <Entity camera id="player" look-controls wasd-controls 
                   jump-ability={{maxJumps: '3'}} position="0 0.5 10" >
                <Entity teleport-controls vive-controls={{ hand: 'left' }} />
                <Entity teleport-controls vive-controls={{ hand: 'right' }} />
                   <Entity static-body geometry={{ primitive: 'box' }} />
                 </Entity>
                <Entity id="light" light={{type: 'point', color: '#3E72E8', intensity: '1.6'}} position="4.6 19 -9.00" />

                <Floor />
                <PodLayout color="red" />
            </a-scene>
        );
    }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));