import React from 'react';
import ReactDom from 'react-dom';
import {Entity} from 'aframe-react';
import io from 'socket.io-client';

const socket = io('http://localhost:9003');

class ClusterInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          podCount: 0,
          deployCount: 0
        }
        this.getClusterInfo = this.getClusterInfo.bind(this);
        socket.on('clusterData', (info) => this.updateClusterInfo(info));
    }
    
    componentWillMount() {

    }

    updateClusterInfo(info) {
      this.setState({podCount: info.pods.count});
      this.setState({deployCount: info.deployments.count});
    }

    getClusterInfo() {
       socket.emit('fetchClusterInfo', 'true') 
    }

    componentDidMount() {
        // Enable physics on the appended object
        // ReactDom.findDOMNode(this).setAttribute('dynamic-body', '');
        // This doesn't belong here.
        document.querySelector('#k8s-logo').setAttribute('material', 'flatShading: true; metalness: 1.00; roughness: 0.60');
        [].slice.call(document.querySelectorAll('.k8s-hands')).forEach((el) => el.setAttribute('material', 'flatShading: true; color: #3671E3; metalness: .30; roughness: 0.20'));
    }
    componentWillUnmount()  {
    }

    render() {
        let podCount = this.state.podCount + " pods"; 
        let deployCount = this.state.deployCount + " deployments"; 

        return(
            <Entity id="cluster-info-holder" onLoadmenu={this.getClusterInfo}>
                <Entity key="k8s-ui" 
                id="k8s-ui"
                glow
                geometry={{ primitive: 'box', width: "3", height:"2", depth: "0.05" }} 
                material={{ color: "#000", opacity: 0, metalness: 0.4}} 
                animation__fadein={{property: "material.opacity", dur: 500, to: .88, startEvents: 'fadeIn'}}
                animation__fadeout={{property: "scale", easing: "easeInCirc", dur: 500, from: '0, 0, 0', to: '1, 1, 1', startEvents: 'fadeIn'}} />

                 <Entity id="kubecon-text"
                 position="-1.2 .5 0.15" 
                 text={{text: "Kubernetes", font: "exo 2 black",  size: 0.2, height: 0}} 
                 material={{ color: "#3671E3"}} />

                 <Entity id="kubecon-shadow"
                 position="-1.2 .5 0.15" 
                 text={{text: "Kubernetes", font: "exo 2 black",  size: 0.2, height: 0, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.01, curveSegments: 1}} 
                 material="shader: flat; color:white;transparent: true; opacity: 0.4;" />

                 <Entity id="cluster-info-text"
                 position=".45 .5 0.15" 
                 text={{text: "cluster info",  size: 0.1, height: 0}}  
                 material={{shader: "flat", color: "white"}} />

                 <Entity id="pod-info-text"
                 position="-1.2 .2 0.15" 
                 text={{text: podCount, font: "exo 2 black",  size: 0.15, height: 0}}  
                 material={{shader: "flat", color: "white"}} />

                 <Entity id="deploy-info-text"
                 position="-1.2 0 0.15" 
                 text={{text: deployCount, font: "exo 2 black",  size: 0.15, height: 0}}  
                 material={{shader: "flat", color: "white"}} />

                 <Entity id="create-pod-button"
                 geometry={{ primitive: 'box', width: 0.4, height: 0.18, depth: 0.03}}
                 material={{ color: "green", metalness: 0.4}} 
                 position=".6 -0.7 0.15" 
                 />

            </Entity>
        )
    }
}
 
export default ClusterInfo;
