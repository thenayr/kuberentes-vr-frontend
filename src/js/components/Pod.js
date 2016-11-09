import React from 'react';
import ReactDom from 'react-dom';
import {Entity} from 'aframe-react';

class Pod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.color,
            clicked: false
        }
        this.containerMat = {
            nginx: "#nginx",
            wordpress: "#wordpress",
            redis: "#redis",
            k8s: "#k8s"
        }        
        this.clickHandler = this.clickHandler.bind(this);
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

    clickHandler(evt) {
        console.log('setting state to clicked')
        this.setState({clicked: true});

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

        var name = "Name: " + this.props.name;
        var namespace = "Namespace: " + this.props.namespace;
        var ipAddress = "IP: " + this.props.ip;
        var startTime = "Launched: " + this.props.startTime;
        var podTexture = this.containerMat[this.props.type] || "#k8s";

        var podTextWrapper = (
                 <Entity id="pod-ui-holder"  
                 visible="true" 
                 ref="pod-ui-holder"
                 animation={{ dur: 2000, easing: "easeInOutElastic", property: "rotation", to: "-30 0 0"}} 
                 >
                    <Entity className="pod-ui-text" 
                    material={{ opacity: 0, shader: 'flat'}} 
                    animation__namespace={{property: "scale", easing: "linear", dur: 400, delay: 0, from: '0.75, 0.75, 0.75', to: '1, 1, 1'}} 
                    animation={{property: "material.opacity", dur: 300, to: 1.0}}
                    position="0, .3, -.1"
                    animation__hover={{easing: "easeInOutQuad", property: "position", dir: "alternate", dur: 2000, loop: "true", to: "0 .4 0"}} 
                    scale="0,0,0"
                    text={{text: name, font: "exo 2 black",  size: 0.15, height: 0}}  
                    />



                    <Entity className="pod-ui-text" 
                    material={{ opacity: 0, shader: 'flat'}} 
                    animation__launched={{property: "scale", easing: "linear", dur: 400, from: '0.75, 0.75, 0.75', to: '1, 1, 1', delay: 0}} 
                    animation={{property: "material.opacity", dur: 300, to: 1.0, }}
                    position="0, 0, 0"
                    animation__hover={{easing: "easeInOutQuad", property: "position", dir: "alternate", dur: 2000, loop: "true", to: "0 .1 0"}} 
                    scale="0,0,0"
                    text={{text: startTime, font: "exo 2 black",  size: 0.15, height: 0}}  
                    />
                 </Entity>
        );
        if (this.state.clicked) {
            podTextWrapper = podTextWrapper;
        } else {
            podTextWrapper = (<Entity id="pod-ui-holder" />); 
        }
        
        return(
            <Entity ref="podholder" id="pod-holder">
                <Entity key={name}
                pod-ui-hide
                ref="pod"
                geometry={{ primitive: 'box' }} 
                onPodgrip={this.clickHandler}
                id={this.props.name}
                material={` metalness:.2; roughness: 0.7; src: ${podTexture}; `} 
                className="pod"
                force-pushable="force: 300"
                the-void >
                </Entity>
                {podTextWrapper}         

           </Entity>
        )
    }
}
 
export default Pod;