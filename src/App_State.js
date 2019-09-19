import React, {Component } from 'react';
import PropTypes from 'prop-types';

class App_State extends Component {
    static defaultProps = {
        apType: 'no'
    }
    static propTypes = {
        apType: PropTypes.string
        // apType: PropTypes.string.isRequired
        //   types example -> array / bool / func / number / object / string / element / any / ...
    }

    render() {
        const title = 'Basic Component';
        const myStyle = {
            backgroundColor: 'gray',
            border: '1px solid black',
            fontSize: '10 px',
            width: 500
            //height: Math.round(Math.random() * 300) + 50,
        };
        return (
            <>
                <div style={myStyle}>{title} ({this.props.apType})</div>
                <StateComponent01 apType='SE'/>
            </>
        );
    }
}


class StateComponent01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            color: 'blue'
        }
        // using function in class : bind part - type #1
        this.changeVal = this.changeVal.bind(this); // enable 'changeVal' function bind to component
    }
    // using function in class : function part - type #1
    changeVal(e){
        this.setState({
            number: this.state.number + 1
        });
        //console.log('event from :' + e.target.value);

        //this.spanText.focus();
        // (this.state.number % 2 === 0) && (this.spanText.style.backgroundColor = 'red');
        (this.state.number % 2 === 0) ? (this.spanText.style.backgroundColor = 'pink') : (this.spanText.style.backgroundColor = 'lightblue');
    }

    // using function in class -> babel syntax - type#2 : 'using function in class : bind part - type #1' + 'using function in class : function part - type #1'
    changeVal02 = () => {
        this.setState({
            number: (this.state.number + 1) * 100
        });
    }

    render () {
        return (
            <>
                <div>
                    <span ref={(ref) => this.spanText=ref}>value from state: {this.state.number}   (apType: {this.props.apType}) </span>
                    <button onClick={this.changeVal}>Add</button>
                    <button onClick={this.changeVal02}>*_+</button>
                </div>
            </>
        );
    };
}

export default App_State;


