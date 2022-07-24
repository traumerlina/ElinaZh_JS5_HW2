const initialState = {
    inputValue :"",
    users:[]
}

export const usersReducer = (state = initialState, action) => {
    if (action.type === "INPUT_VALUE") {
        return {...state, inputValue: action.payload}
    }

    else if (action.type === "ADD_USER") {
        return{...state, users:[...state.users, action.payload]}
    }

    else if (action.type === "CLEAR_USER") {
        return {...state, inputValue: ""}
    }
    else return state
}