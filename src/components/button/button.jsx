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
        this.setState({counter: this.state.counter + 1});
        //ny function, need break this out to its own file later
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                let myobject = data; 
                let val = Object.entries(myobject);
                document.querySelector('#root2').insertAdjacentHTML('afterbegin', val);
                //this console-log just for testing gettint spesific data out
                console.log(myobject.title);
            })
            .catch(function(error){console.log('something went wrong')});
        // end new function
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
