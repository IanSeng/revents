export const createReducer = (initialState, fnMap) => {
    return (state = initialState, {type, payload}) => {
        const handler = fnMap[type]; //[] is a object bracket notation, so this type is going to be swapped for a string depending on what's passed into this fnMap
        return handler ? handler(state, payload) : state 
    }
}