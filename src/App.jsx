import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {EnterPlan} from './EnterPlan';
import {Calendar} from "./calendar";

class App extends Component {


    render() {
        return (
            <div>
                <EnterPlan/>
                <Calendar/>
            </div>
        )
    }
}


export default App;