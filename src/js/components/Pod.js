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
        // [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.components['sphere-collider']);

        // Enable physics on the appended object
        ReactDom.findDOMNode(this.refs.pod).setAttribute('dynamic-body', 'shape: box;');

        // Dynamically set position to spawn object
        ReactDom.findDOMNode(this.refs.pod).setAttribute('position', this.props.podPOS);
    }
    componentWillUnmount()  {
        console.log("Removing: " + this.props.name)
    }

    render() {
        // Lights crash textures on mobile, disable them
        let lights = null;
        if (AFRAME.utils.isMobile()){
          lights = lights
        } else {
          lights = lights
            // Lights are a huge performance hit unfortunately, revisit later on
            //   lights = <Entity light={{type: 'point', color: '#63C7B2', intensity: '0.05'}} />
        }
        return(
            <Entity ref="podholder" id="pod-holder">
                <Entity key={name}
                ref="pod"
                geometry={{ primitive: 'box' }} 
                id={this.props.name}
                material={` metalness:.2; roughness: 0.7; src: #nginx; `} 
                className="pod"
                force-pushable
                the-void >
                <Entity

                static-body
                text={{text: this.props.name, font: "exo 2 black",  size: 0.15, height: 0}}
                look-at="[camera]"
                position="0 1.0 0"
                material={{shader: "flat", color: "white"}} />
                </Entity>
            </Entity>
        )
    }
}
 
export default Pod;