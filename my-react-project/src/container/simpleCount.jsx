import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SimpleCount = () => {

    const count = useSelector(state => state.myCounter.counter)
    const dispatch = useDispatch();
    return <div>
        <h1>Hello</h1>
        <h4>{count}</h4>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNT" })}>+1</button>
        <button onClick={() => dispatch({ type: "INCREMENT_COUNT_TEN" })}>+10</button>
        <button onClick={() => dispatch({type : "INCREMENT_SUB_TEN" })}>-10</button>
        <button onClick={() => dispatch({type : "INCREMENT_SUB" })}>-1</button>
    </div>
}

export default SimpleCount