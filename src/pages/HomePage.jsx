import React, {useState, useEffect} from 'react'
import { AddTodo } from '../components/AddTodo'
import {TodoList} from '../components/TodoList'
import { Container, Row } from '../globalStyles'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/todoActions';
import { useFilter } from '../hooks/useFilter'
import { Button, Main } from '../globalStyles'


const HomePage = () => {
	const [status, setStatus] = useState('')
	const {todos, todoHeading}= useSelector(state=>state.todos)
	const filterTodos = useFilter(todos, status)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchTodos())
	},[])
	
	const clickHandler = (e) => {
		setStatus(e.target.id)
	}

  return (
	<Main>
		<Container>
			<Row>
				<AddTodo/>
			</Row>
			<Row>
				<TodoList todos={filterTodos} todoHeading={todoHeading}/>
			</Row>
			<Row justify='space-between' style={{maxWidth: 400, margin: '0 auto 80px auto'}}>
				<Button  id="all" className={status == "all"? "active": ""} onClick={clickHandler}>All</Button>
				<Button  id='active' className={status == "active"? "active": ""} onClick={clickHandler}>Active</Button>
				<Button  id='completed' className={status == "completed"? "active": ""} onClick={clickHandler}>Completed</Button>
			</Row>
		</Container>
	</Main>
  )
}

export default HomePage