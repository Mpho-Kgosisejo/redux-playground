

const initialState = {
    age: 21,
    history: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    // if (action.type === "AGE_UP"){
    if (action.type === "AGE_UP_ASYNC"){
        // newState.age++
        // newState.loading = false
        return ({
            ...state,
            age: state.age + action.value,
            loading: false,
            history: state.history.concat({
                id: Math.random(),
                age: state.age + action.value
            })
        })
    }
    if (action.type === "AGE_DOWN"){
        // newState.age--
        return ({
            ...state,
            age: state.age - action.value,
            history: state.history.concat({
                id: Math.random(),
                age: state.age - action.value
            })
        })
    }
    if (action.type === "DEL_ITEM"){
        // newState.age--
        return ({
            ...state,
            history: state.history.filter(el => el.id !== action.key)
        })
    }
    else if (action.type === "LOADING"){
        newState.loading = true
    }
    return (newState)
}

export default reducer