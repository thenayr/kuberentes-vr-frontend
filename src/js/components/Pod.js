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
        [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.components['sphere-collider']);
        [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.removeAttribute('sphere-collider'));
        [].slice.call(document.querySelectorAll('.controllers')).forEach((el) => el.setAttribute('sphere-collider', 'objects: .pod;'));
        ReactDom.findDOMNode(this).setAttribute('dynamic-body', '');
        ReactDom.findDOMNode(this).setAttribute('position', this.props.podPOS);
    }

    render() {
        // Lights crash textures on mobile, disable them
        let lights = null;
        if (AFRAME.utils.isMobile()){
          lights = lights
        } else {
          lights = lights
            // Lights are a huge performance hit unfortunately, revisit later on
            //   lights = <Entity light={{type: 'point', color: '#63C7B2', intensity: '0.2'}} />
        }
        return(
            <Entity key={name}
            geometry={{ primitive: 'box' }} 
            material={`color: ${this.state.color}; metalness:0.7`} 
            className="pod">
                {lights}
                <Entity bmfont-text={{ text: `${this.props.name}`, color: "#63C7B2", align: 'center'}} position="-2.5 1 0" />
            </Entity>
        )
    }
}
 
export default Pod;