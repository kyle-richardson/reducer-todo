import React from "react"

const Form = (props)=>{
    const {state, dispatch} = props
    return (
        <div className="form-container">
            <form className="form" onSubmit={e=>{
                e.preventDefault()
                dispatch({
                    item: `${e.target[0].value}`,
                    type: 'ADD_ITEM'
            })}}>
                <input 
                    className="text-box"
                    type="text" 
                    name="item" 
                    value={state.listItem || ''}
                    onChange={e=>dispatch({
                        type: 'INPUT',
                        value: e.target.value
                    })}
                    placeholder="Enter new task here"
                />
                <button className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form