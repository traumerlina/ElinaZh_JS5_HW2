

export const changeInputAction = (input) => {
    return {type:"INPUT_VALUE", payload: input}
}

export const addUserAction = (user) => {
    return {type:"ADD_USER", payload: user}
}

export const clearUserAction = () => {
    return {type:"CLEAR_USER", payload: ""}
}