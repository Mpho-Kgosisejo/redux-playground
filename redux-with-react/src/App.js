import React, { Component } from 'react';
import {connect} from "react-redux"
import MultiReducers from './components/MultiReducers';
import * as Actions from "./store/action/actions"

class App extends Component {

    render() {
    return (
        <div className="App">
            <h4>React with Redux</h4>

            {this.props.loading && "loading..."}

            <div>
                Count: <span>{this.props.age}</span>
            </div>
            <button onClick={() => this.props.onAgeUp()}>Count Up</button>
            <button onClick={this.props.onAgeDown}>Count Down (-2)</button>
            
            <hr/>

            <MultiReducers />

            <hr/>

            <h4>History</h4>
            {/* <pre>
                {JSON.stringify(this.props.history, "\t", 1)}
            </pre> */}
            <div>
                <ul>
                    {
                        this.props.history.map(h => (
                            <li key={h.id} onClick={() => this.props.onDeleteItem(h.id)}>
                                {h.age}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
    }
}

const mapStateToProps = (state) => {
    return ({
        age: state.r.age,
        loading: state.r.loading,
        history: state.r.history
    })
}

const mapDispachToProps = (dispach) => {
    return ({
        // onAgeUp: () => dispach(Actions.ageUp(1)),
        onAgeUp: () => dispach({type: "AGE_UP"}), // For saga async() calls...
        onAgeDown: () => dispach(Actions.ageDown(2)),
        onDeleteItem: (id) => dispach({type: "DEL_ITEM", key: id})
    })
}

export default connect(mapStateToProps, mapDispachToProps)(App);
