import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.function1 = this.function1.bind(this);
        //you could use arrow functions?
    }
    
    function1() {
        this.setState({counter: this.state.counter + 1})
    }
    
    render() {
        return (
        <button
            type="button"
            className={"danielbutton " + this.props.className }
            onClick={this.function1}>{ `${this.props.name} ${this.state.counter}` }
        </button>
        )
    }
}

export default Button;
