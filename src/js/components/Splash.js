import React from 'react';
import ReactDom from 'react-dom';
import {Entity} from 'aframe-react';

class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          podCount: 0,
          deployCount: 0
        }
    }
    
    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount()  {
    }

    render() {

        return(
            <Entity id="splash" 
            geometry={{primitive: 'plane' }}
            position="0, 1, -1.5"
            material={{shader: 'gif', src: "#hacker"}}
            fit-texture
            />

        )
    }
}
 
export default Splash;