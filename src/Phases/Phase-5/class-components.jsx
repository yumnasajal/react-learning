import React, { useState } from "react";
class Counting extends React.Component {
    constructor(props) { // inititalizes state , bind methods , perform initial setup
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log('Component Mounted');
    }
    componentDidUpdate() {
        console.log('Component updated');
    }
    componentWillUnmount() {
        console.log('Componenet is leaving');
    }
    shouldComponentUpdate(nextProps, nextState) { // if parent update and child recieves same props but child doesn't actually need to pupdate .. it skips unnecessary render
        return nextState.count !== this.state.count;
    }
    // error boundary 
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() { // method responsible for setting UI 
        if (this.state.hasError) {
            return <h2>Something went wrong</h2>
        }
        return <h1>{this.state.count}</h1>
    }
}

// funcitonal equivalent of shouldcomponnet update;
const Child = React.memo(function Child({ name }) { // if the props havn't changed then avoid re rendering child 
    console.log('Child rendered');
    return <p>{name}</p>;
});

// example

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     // const [count, setCount] = useState(0);
            count: 0,
            increments: 0,
            decrements: 0,
            userId: ''
        }
    }
    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 , increments: this.state.increments + 1})}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count -1, decrements: this.state.decrements + 1})}>Decrement</button>
                <button onClick={() => this.state.userId === '' ? this.setState({ userId: 'Admin' }) : this.setState({ userId: '' })}>Change user id to {this.state.userId === '' ? 'Admin' : 'Null'}</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('Component Mounted')
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.increments !== this.state.increments){
            console.log('Increment button updated');
        }
        else{
            console.log('Decrement button updated');
        }
        console.log('component updated')
        // cleanup for event which is not unmounted
        if(prevState.userId !== this.state.userId){
            console.log('removing old id', prevState.userId);
            console.log('Changing to new user id: ', this.state.userId)
        }
    }
    componentWillUnmount() {
        console.log('Component unmounted', this.state.count)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update');
        console.log('Current: ', this.state.count);
        console.log('Next: ', nextState.count);
        return true;
    }

}
export class CounterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_child: true,
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({show_child: !this.state.show_child})}>Toggle Counter</button>
                {this.state.show_child && <CounterClass />}
            </div>
        )
    }
}
