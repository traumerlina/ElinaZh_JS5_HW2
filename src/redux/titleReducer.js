export const titleReducer = (state = {}, action) => {
    if(action.type === "CHANGE_TITLE") {
        return {...state, title:"new title"}
    }
    return state
}