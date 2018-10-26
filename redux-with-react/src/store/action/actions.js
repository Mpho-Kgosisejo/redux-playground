export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const ageUpAsync = (value) => {
    return ({type: "AGE_UP", value: value})
}

export const ageUp = (value) => {
    return (dispatch => {
        dispatch(loading())
        
        setTimeout(() => {
            dispatch(ageUpAsync(value))
        }, 5000)
    })
}

export const ageDown = (value) => {
    return ({type: "AGE_DOWN", value: value})
}