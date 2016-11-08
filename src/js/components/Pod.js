import React from 'react';
import ReactDom from 'react-dom';
import {Entity} from 'aframe-react';

class Pod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color
        }
    }

    
    componentWillMount() {
    }

    componentDidMount() {
        // Fun hack to make physics and grab register newly added objects
        [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.removeAttribute('sphere-collider'));
        [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.setAttribute('sphere-collider', 'objects: .pod;'));
        // [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.components['sphere-collider'].update);

        // Enable physics on the appended object
        ReactDom.findDOMNode(this.refs.pod).setAttribute('dynamic-body', '');

        // Dynamically set position to spawn object
        ReactDom.findDOMNode(this.refs.pod).setAttribute('position', this.props.podPOS);
    }
    componentWillUnmount()  {
        console.log("Removing: " + this.props.name)
    }

    render() {
        // Lights crash textures on mobile, disable them
        // let lights = null;
        // if (AFRAME.utils.isMobile()){
        //   lights = lights
        // } else {
        //   lights = lights
            // Lights are a huge performance hit unfortunately, revisit later on
            //   lights = <Entity light={{type: 'point', color: '#63C7B2', intensity: '0.05'}} />
        // }
        var namespace = "Namespace: " + this.props.namespace;
        var ipAddress = "IP: " + this.props.ip;
        var startTime = "Launched: " + this.props.startTime;
        return(
            <Entity ref="podholder" pod-ui id="pod-holder">
                <Entity key={name}
                ref="pod"
                geometry={{ primitive: 'box' }} 
                id={this.props.name}
                material={` metalness:.2; roughness: 0.7; src: #nginx; `} 
                className="pod"
                pod-ui-hide
                force-pushable
                the-void >
                <Entity className="sprite" sprite-label={{message: this.props.name}} position="0 .5 0" />
                </Entity>
                 <Entity id="pod-ui-holder"  
                 visible="false" 
                 ref="pod-ui-holder"
                 animation={{ dur: 2000, easing: "easeInOutElastic", property: "rotation", to: "-30 0 0"}} 
                 >

                    <Entity className="pod-ui-text" 
                    material={{shader: "flat", color: "white", opacity: 0}} 
                    animation__namespace={{property: "scale", easing: "linear", dur: 400, delay: 0, from: '0.75, 0.75, 0.75', to: '1, 1, 1', startEvents: "podFadeIn"}} 
                    animation={{property: "material.opacity", dur: 300, to: 1.0, startEvents: 'podFadeIn'}}
                    position="0, 0, 0"
                    animation__hover={{easing: "easeInOutQuad", property: "position", dir: "alternate", dur: 2000, loop: "true", to: "0 .1 0"}} 
                    scale="0,0,0"
                    text={{text: namespace, font: "exo 2 black",  size: 0.15, height: 0}}  
                    />

                    <Entity className="pod-ui-text" 
                    material={{shader: "flat", color: "white", opacity: 0}} 
                    animation__ip={{property: "scale", easing: "linear", dur: 400, from: '0.75, 0.75, 0.75', to: '1, 1, 1', startEvents: 'podFadeIn', delay: 0}} 
                    animation={{property: "material.opacity", dur: 300, to: 1.0, startEvents: 'podFadeIn'}}
                    position="0, -.3, .1"
                    animation__hover={{easing: "easeInOutQuad", property: "position", dir: "alternate", dur: 2000, loop: "true", to: "0 -.2 .1"}} 
                    scale="0,0,0"
                    text={{text: ipAddress, font: "exo 2 black",  size: 0.15, height: 0}}  
                    />

                    <Entity className="pod-ui-text" 
                    material={{shader: "flat", color: "white", opacity: 0}} 
                    animation__launched={{property: "scale", easing: "linear", dur: 400, from: '0.75, 0.75, 0.75', to: '1, 1, 1', startEvents: 'podFadeIn', delay: 0}} 
                    animation={{property: "material.opacity", dur: 300, to: 1.0, startEvents: 'podFadeIn'}}
                    position="0, -.6, .2"
                    animation__hover={{easing: "easeInOutQuad", property: "position", dir: "alternate", dur: 2000, loop: "true", to: "0 -.5 .2"}} 
                    scale="0,0,0"
                    text={{text: startTime, font: "exo 2 black",  size: 0.15, height: 0}}  
                    />

                 </Entity>
           </Entity>
        )
    }
}
 
export default Pod;