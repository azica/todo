
import axios from 'axios'
import {ADD_TODO, COMPLETED_TODO, FETCH_TODO, DELETE_TODO, SET_FILTER, UPDATE_TODO} from './type'
const url = process.env.REACT_APP_DB_URL

 export const fetchTodos =()=>{
    return async(dispatch)=> {
        const response = await axios.get(`${url}?_limit=5`)
        dispatch({type: FETCH_TODO, payload: response.data})
    }
}
export const toggleCompletedTodo = (id) => {
	return (dispatch) => {
		dispatch({type: COMPLETED_TODO, payload: id})
	}
}
export const deleteTodo = id => {
	return (dispatch) => {
		dispatch({type: DELETE_TODO, payload: id})
	}
}
export const addTodo = title => {
	return (dispatch) => {
		axios.post(`${url}`, {id: Date.now(),title, completed: false})
		
		dispatch({type: ADD_TODO, payload: title})
	}
}
export const setFilter = filter => {
	return (dispatch)=> {
		dispatch({ type: SET_FILTER, payload: filter })
	}
}
export const updateTodo = (id, title)=> {
	return (dispatch)=> {
		axios.put(`${url}/${id}`, {id, title, completed: false})
		.then(res=>{
			console.log(res.data)
		})
		dispatch({type: UPDATE_TODO, payload: {id, title}})
	}
}