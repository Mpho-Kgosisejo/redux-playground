const {createStore} = require("redux")

const initialState = {
    age: 21
}
const myReducer = (state = initialState, action) => {
    const newState = {...state}

    if (action.type === "ADD"){
        newState.age += 1
    }
    if (action.type === "SUBST"){
        newState.age -= action.val
    }
    if (action.type === "NEW"){
        newState.newObj = action.val
    }
    return (newState)
}

const store = createStore(myReducer)
store.subscribe(() => {
    // console.log(`[onStateChange()] => ${JSON.stringify(store.getState(), "\t", 2)}`)
    console.log(`[onStateChange()] => ${JSON.stringify(store.getState())}`)
})

console.log("To add:")
store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})
console.log("To Sub:")
store.dispatch({type: "SUBST", val: 5})
console.log("To New Obj:")
store.dispatch({type: "NEW", val: [{id: 1, url: "url1"}, {id: 2, url: "url2"}]})