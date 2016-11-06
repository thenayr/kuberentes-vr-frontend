import React from 'react';
import ReactDom from 'react-dom';
import {Entity} from 'aframe-react';

class ClusterInfo extends React.Component {

    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
    }

    componentDidMount() {
        // Enable physics on the appended object
        // ReactDom.findDOMNode(this).setAttribute('dynamic-body', '');
        document.querySelector('#k8s-logo').setAttribute('material', 'flatShading: true');
    }
    componentWillUnmount()  {
    }

    render() {
        return(
            <Entity id="cluster-info-holder">
                <Entity key="k8s-ui" 
                id="k8s-ui"
                glow
                geometry={{ primitive: 'box', width: "3", height:"2", depth: "0.05" }} 
                material={{ color: "#000", opacity: 0, metalness: 0.4}} 
                animation__fadein={{property: "material.opacity", dur: 500, to: 1, startEvents: 'fadeIn'}}
                animation__fadeout={{property: "scale", easing: "easeInCirc", dur: 500, from: '0, 0, 0', to: '1, 1, 1', startEvents: 'fadeIn'}} />
                 <Entity  id="kubecon-text"
                 position="-1.2 .5 0.15" 
                 text={{text: "Kubecon", font: "exo 2 black",  size: 0.2, height: 0}} 
                 material={{shader: "flat", color: "white"}} />

                 <Entity id="kubecon-shadow"
                 position="-1.2 .5 0.15" 
                 text={{text: "Kubecon", font: "exo 2 black",  size: 0.2, height: 0, bevelEnabled: true, bevelSize: 0.01, bevelThickness: 0.01, curveSegments: 1}} 
                 material="shader: flat; color:white;transparent: true; opacity: 0.4;" />

                 <Entity id="cluster-info-text"
                 position=".3 .5 0.15" 
                 text={{text: "cluster info",  size: 0.1, height: 0}}  
                 material={{shader: "flat", color: "white"}} />

            </Entity>
        )
    }
}
 
export default ClusterInfo;