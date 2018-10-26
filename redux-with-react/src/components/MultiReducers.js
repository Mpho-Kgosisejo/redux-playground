import React from "react"
import {connect} from "react-redux"

class MultiReducers extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <b>A: {this.props.a}</b>
                    *
                    <b>B: {this.props.b}</b>
                    <br/>
                    <button onClick={() => this.props.updateA(this.props.b)}>A</button>
                    <button onClick={() => this.props.updateB(this.props.a)}>B</button>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        a: store.rA.a,
        b: store.rB.b
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateA: (b) => dispatch({type: "UPDATE_A", b: b}),
        updateB: (a) => dispatch({type: "UPDATE_B", a: a})
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(MultiReducers)