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

    componentDidMount() {
        ReactDom.findDOMNode(this).setAttribute('dynamic-body', '');
    }

    render() {
        return(
            <Entity 
            id={`${this.props.name}`}
            key={`${this.props.name}`}
            geometry={{ primitive: 'box' }} 
            shape="box" 
            material={`color: ${this.state.color}; metalness:0.7`} >
                <Entity light={{type: 'point', color: '#63C7B2', intensity: '0.2'}} position="0 0 0" />
            </Entity>
        )
    }
}
 
export default Pod;