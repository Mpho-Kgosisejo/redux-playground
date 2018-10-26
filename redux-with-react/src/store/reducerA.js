

const initialState = {
    a: 1
}

const reducer = (state = initialState, action) => {
    // const newState = {...state}

    if (action.type === "UPDATE_A"){
        // newState.age++
        return ({
            ...state,
            a: state.a + action.b
        })
    }
    // return (newState)
    return (state)
}

export default reducer