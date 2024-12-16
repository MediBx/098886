import React from "react";

interface MyComponentState {
    count: number;
    time?: Date; // time is optional
}

class MyComponent extends React.Component<{}, MyComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        };
    }


    componentDidMount() {
        console.log("componentDidMount: Component was added to the DOM");
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default MyComponent;