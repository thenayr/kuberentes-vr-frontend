import React from 'react';
import {Entity} from 'aframe-react';
import Pod from './Pod';
import podData from '../mock/pods.json';
import io from 'socket.io-client';

const socket = io('http://blackpearl.local:9003');

class PodLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pods: [],
            podsLoaded: false
        };
        socket.on('newPod', (newPod) => this.podAddEvent(newPod));
        socket.on('removePod', (removePod) => this.podRemoveEvent(removePod));
        socket.on('initPod', (initPod) => this.podInitEvent(initPod));
    }

    podInitEvent(initPod) {
      this.setState({pods: initPod.podList});
      this.setState({ podsLoaded: true });
    }

    podAddEvent(newPod) {
        let pod = newPod,
            podList = this.state.pods
        if(pod.name) {
            podList.push(
                pod
            );
            this.setState({pods: podList});
        } else {
            console.log("Unknown pod data received")
            console.log(pod);
        }
    }

    podRemoveEvent(removePod) {
        let pod = removePod
        var podsUpdate = this.state.pods.filter(function (el) {
            return el.name != removePod.name
        });
        this.setState({ pods: podsUpdate })
    }

    loadPodsFromServer() {
        socket.emit('sniffPods', "true");
    }

    componentWillMount() {
      this.loadPodsFromServer(); 
    }

    render() {

        let podList = this.state.pods
        if (this.state.podsLoaded) {
            podList = podList.map((pod) => (
                <Pod name={pod.name} key={pod.name} color="red" />
            ))
            return(
                <Entity id="pod-layout" key="pod-layout" layout={{type: 'circle', radius: '10'}} >
                    {podList}
                </Entity>
            );
        } else {
            return(
                <Pod name="test" key="test" color="red" />
            );

        }
    }
}

export default PodLayout;