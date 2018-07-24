import React from 'react';
import classNames from 'classnames';
import './button.css';

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
        const classes = classNames('button', this.props.className);

        return (
        <button
            type="button"
            className={classes}
            onClick={this.function1}>{ `${this.props.name} ${this.state.counter}` }
        </button>
        )
    }
}

export default Button;
