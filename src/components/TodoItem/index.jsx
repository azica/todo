import React, {useState, useEffect} from 'react'
import {TodoLi, TodoCheckbox, Input, Icon, EditWrapper } from './style';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, deleteTodo, updateTodo } from '../../store/todoActions';
import deleteIcon from './deleteIcon.svg';
import editIcon from './editIcon.svg'
import {Button} from '../../globalStyles'

export const TodoItem = ({item}) => {
	const [isEdit, setIsEdit] = useState(false)
	const [value, setValue] = useState('')
	const [id, setId] = useState('')
	const dispatch = useDispatch()
	const completedHandler = (id) => {
		dispatch(toggleCompletedTodo(id))
	}
	const deleteHandler = (id) => {
		dispatch(deleteTodo(id))
	}
	var url = window.location.href.split('/'),
		lastSegment = url.pop() 

	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}
	const editHandler =(id)=> {
		setIsEdit(true)
		setId(id)
	}
	const updateHandler = ()=> {
		dispatch(updateTodo(id, value))
		setIsEdit(false)
	}

  return (
	<>
	{ lastSegment == 'to-do' && isEdit  ? 
		<EditWrapper>
			<Input 
					placeholder={item.title}
					onChange={onChangeHandler}
					/>
			<Button
				onClick={updateHandler}
			>Save</Button>
		</EditWrapper>
		
		: 
		<TodoLi className={`${item.completed ? 'done' : ''}`}>
			<TodoCheckbox 
				onChange={()=>completedHandler(item.id)}
				checked={item.completed}
				disabled={lastSegment != 'to-do' && true }
				type="checkbox"/>
			<span>{item.title}</span>
			
			<Icon 
				src={deleteIcon}
				onClick={()=>deleteHandler(item.id)}/>
			<Icon
				onClick={()=>editHandler(item.id)}
				src={editIcon}
			/>
		</TodoLi>
	}
	</>
  )
}