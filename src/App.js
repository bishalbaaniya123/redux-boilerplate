import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from "redux";
import {testAction} from "./app/redux-stuffs/actions/TestAction";
import {connect} from 'react-redux';

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
        console.log("Props from componentDidMount", this.props);
        this.props.testAction();
    }
    componentDidUpdate(){
        console.log("Props from componentDidUpdate", this.props);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        testAction: testAction
    }, dispatch)
};
const mapStateToProps = (state) => {
    return {
        test: state
    };
};

const smartApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default smartApp;
