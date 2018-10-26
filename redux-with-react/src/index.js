import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux"
import {createStore, combineReducers, applyMiddleware} from "redux"
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"

import reducer from "./store/reducer"
import reducerA from "./store/reducerA"
import reducerB from "./store/reducerB"
import {watchAgeUp} from "./sagas/saga"

const rootReducer = combineReducers({
    r: reducer,
    rA: reducerA,
    rB: reducerB
})

/*const logAction = store => {
    return (next => {
        return action => {
            const result = next(action)
            console.log(`middleware: ${JSON.stringify(result)}`)
            return (result)
        }
    })
}*/

const sagaMiddleware = createSagaMiddleware(rootReducer, applyMiddleware)
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp)
// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
