
export const initialState = {
    listItem: '',
    todoList: []
}

export const reducer=(state, action) =>{
    switch (action.type) {
      case 'INPUT':
          return {
              ...state, 
              listItem: action.value
          }
      case 'ADD_ITEM':
          const newID = new Date().getTime()
          const newItem = {
            item: action.item,
            completed: false,
            id: newID
          }
          const newList = [...state.todoList, newItem]
          return {
            ...state, 
            todoList: newList
          }
      case 'REMOVE_ITEM':
          const newStateRemove = state.todoList.filter(ele => ele.id!==action.id)
          return {
              ...state,
              todoList: newStateRemove
          }
      case 'COMPLETE_ITEM':
          const newStateCompleted= state.todoList.map(
            el =>`${el.id}`===`${action.id}` ? {...el, completed: !el.completed} : el
          )
          return {
            ...state,
            todoList: newStateCompleted
          }
      case 'CLEAR_COMPLETED':
          const newStateClear=state.todoList.filter(ele=> !ele.completed)
          return {
            ...state,
            todoList: newStateClear
          }

      default:
        return state
    }
  }
