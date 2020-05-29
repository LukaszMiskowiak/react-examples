import React from 'react';

class LifecycleContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    getDerivedStateFromProps() {
        // triggered by:
        // constructor()
        // setState()
        // forceUpdate()
        // new Props
    }

    shouldComponentUpdate() {
        // triggered after:
        // getDerivedStateFromProps()
    }

    render() {
        // triggered after:
        // getDerivedStateFromProps()
        // shouldComponentUpdate()
    }


    componentDidMount() {} 

    componentDidUpdate() {
        // triggered after:
        // render()
    }

    componentWillUnmount() {}
}

export default LifecycleContainer;