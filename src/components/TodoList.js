import React, {useReducer} from "react"
import {initialState, reducer} from "../reducers/reducer"
import Form from "./Form"

const TodoList = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>TodoList</h2>
            <Form state={state} dispatch={dispatch} />
            {state.todoList.map(listItem => {
                return (
                    <div key={listItem.id}>
                        <span >{listItem.completed ? 'X' : null}</span>
                        <div key={listItem.id}>{listItem.item} ID: {listItem.id}</div>
                        <button onClick={()=>dispatch({
                            id: listItem.id,
                            type: 'REMOVE_ITEM'
                        })}>Remove</button>
                        <button onClick={()=>dispatch({
                            id: listItem.id,
                            type: 'COMPLETE_ITEM'
                        })}>Toggle Complete</button>
                    </div>
                )
            })}
            <button onClick={()=>dispatch({
                type: 'CLEAR_COMPLETED'
            })}>Clear all completed</button>
        </div>
   
    )
}

export default TodoList