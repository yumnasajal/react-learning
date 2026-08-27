import React, { Component } from "react";
import { useEffect, useState } from "react";

export class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log("Counter mounted");
    }
    componentDidUpdate() {
        console.log("Counter updated");
    }
    componentWillUnmount() {
        console.log("Counter unmounted");
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count <= 5;
    }
    render() {
        // to check errorhandling
        // if (this.state.count === 3) {
        //     throw new Error("CounterClass crashed!");
        // }
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase</button>
            </div>
        );
    }
}

//can  be used for both lifecycles of componenet
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.log("Error caught:", error);
    }
    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }
        return this.props.children; // props = {children: <CounterFunction />}
        // return <CounterClass/>
    }
}


export const CounterFunction = () => {
    const [count, setCount] = useState(0);
    // componentDidMount
    useEffect(() => {
        console.log("Counter mounted");
        // componentWillUnmount
        return () => {
            console.log("Counter unmounted");
        };
    }, []);
    // componentDidUpdate
    useEffect(() => {
        if (count > 0) {
            console.log("Counter updated");
        }
    }, [count]);
    // to check errorhandling
    // if (count === 3) {
    //     throw new Error("CounterFunction crashed!");
    // }
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};