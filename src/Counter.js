import React, { useReducer } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
    const operations = {
        add: (c) => c + 1,
        minus: (c) => c -1,
        reset: (_) => 0
    }
    return {count: operations[action.type](state.count)}
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const ActionButton = actionButton(dispatch)
    return (<div>
        <h3>Count: {state.count}</h3>
        <ActionButton action='add'>+</ActionButton>
        <ActionButton action='minus'>-</ActionButton>
        <ActionButton action='reset'>Reset</ActionButton>
    </div>)
}

const actionButton = (dispatch) => ({ action, children }) => {
    return (
        <button onClick={() => dispatch({ type: action })}>
           {children}
        </button>
    )
}