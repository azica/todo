import React, {useState} from 'react'
import { Input, InputGroup} from './style'
import {Button} from '../../globalStyles'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoActions';

export const AddTodo = () => {
	const [todo, setTodo] = useState('')
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const submitHandler =(value)=> {
        if(value.trim()) {
            dispatch(addTodo(value))
            setValue('')
        }
    }

  return (
	<InputGroup>
		<Input
		value={value}
		onChange={(e)=>setValue(e.target.value)}
		placeholder="What needs to be done?"
		/>
		<Button onClick={()=>submitHandler(value)}>Add
		<svg style={{marginLeft: 3, marginTop: -2}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16"></circle><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="128" y1="88" x2="128" y2="168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
		</Button>
	</InputGroup>
  )
}

