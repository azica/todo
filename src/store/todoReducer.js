import { ADD_TODO, COMPLETED_TODO, DELETE_TODO, FETCH_TODO, SET_FILTER, UPDATE_TODO } from "./type";

let initialState = {
    loading: false,
    error: '',
	todoHeading: 'Houseworks',
	todos: [
		{id: 1, todo: 'to wash', completed: true},
		{id: 2, todo: 'to clean', completed: false}
	],

}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
		case FETCH_TODO: {
			return {
				...state,
				todos: action.payload
			}
		}
        case COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map(item=> {
					if(item.id===action.payload){
						return {
							...item,
							completed: !item.completed
						}
					}
					return item
				})
		}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(item=>item.id!==action.payload)
		}
		case ADD_TODO: {
			const newTodo = {id: Date.now(), title: action.payload, completed:false}
			return {
				...state,
				todos: [...state.todos, newTodo]
			}
		}
		case SET_FILTER: {
			return {
				...state,
				todos: action.payload
			}
		}
		case UPDATE_TODO: {
			return {
				...state,
				todos: state.todos.map(todo=> {
					if(todo.id == action.payload.id) {
						return {...todo, title: action.payload.title}
					} 
					return todo
				})
			}
		}
        default: 
            return state;
        
    }
}

export default todoReducer